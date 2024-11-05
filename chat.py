import tkinter as tk
import json

#  archivo JSON
with open('C:/Users/huawei/OneDrive - Instituto Politecnico Nacional/Desktop/Documents/LN/Chatbotsito/QandA.json', 'r', encoding='utf-8') as file:
    traducciones = json.load(file)

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

def encontrar_similar(palabra, diccionario):
    min_distancia = float('inf')
    palabra_mas_cercana = None
    for key in diccionario.keys():
        distancia = levenshtein_distance(palabra, key)
        if distancia < min_distancia:
            min_distancia = distancia
            palabra_mas_cercana = key
    return palabra_mas_cercana

def traducir():
    palabra = entrada.get().lower()  # Obtener palabra en minúsculas
    similar = encontrar_similar(palabra, traducciones)
    if similar:
        traduccion = traducciones[similar]
        resultado.config(text=f"Tú: {similar}\nRespuesta: {traduccion}")
    else:
        resultado.config(text="No encontrada y no hay sugerencias.")




ventana = tk.Tk()
ventana.title("Plantitas Chat")

entrada = tk.Entry(ventana, width=50)
entrada.pack(pady=10)

boton = tk.Button(ventana, text="Preguntar", command=traducir)
boton.pack(pady=10)

resultado = tk.Label(ventana, text="", wraplength=400)
resultado.pack(pady=10)

ventana.mainloop()