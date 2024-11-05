import tkinter as tk
import json

# Cargar el archivo JSON
with open('QandA.json', 'r', encoding='utf-8') as file:
    data = json.load(file)

def levenshtein_distance(a, b):
    if len(a) < len(b):
        return levenshtein_distance(b, a)

    if len(b) == 0:
        return len(a)

    previous_row = range(len(b) + 1)
    for i, c1 in enumerate(a):
        current_row = [i + 1]
        for j, c2 in enumerate(b):
            insertions = previous_row[j + 1] + 1
            deletions = current_row[j] + 1
            substitutions = previous_row[j] + (c1 != c2)
            current_row.append(min(insertions, deletions, substitutions))
        previous_row = current_row

    return previous_row[-1]

def QA():
    pregunta = entrada.get()
    min_dist = float('inf')
    closest_question = None

    for q in data.keys():
        dist = levenshtein_distance(pregunta, q)
        if dist < min_dist:
            min_dist = dist
            closest_question = q

    respuesta = data.get(closest_question, "No encontrada y no hay sugerencias.")
    resultado.config(text=respuesta)

# Configuración de la interfaz gráfica
ventana = tk.Tk()
ventana.title("Plantitas Chat")

entrada = tk.Entry(ventana, width=50)
entrada.pack(pady=10)

boton = tk.Button(ventana, text="Preguntar", command=QA)
boton.pack(pady=10)

resultado = tk.Label(ventana, text="", wraplength=400)
resultado.pack(pady=10)

ventana.mainloop()