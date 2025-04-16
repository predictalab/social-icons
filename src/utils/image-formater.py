#!/usr/bin/env python3

import os
from PIL import Image

# Définir le dossier des images (chemin relatif à la racine du projet)
BASE_DIR = os.path.abspath(os.path.join(os.path.dirname(__file__), '..'))
ASSETS_DIR = os.path.join(BASE_DIR, 'assets', 'social-icons')
# Dossier de sortie pour les images traitées
OUTPUT_DIR = os.path.join(ASSETS_DIR, 'processed')

# Crée le dossier de sortie s'il n'existe pas
os.makedirs(OUTPUT_DIR, exist_ok=True)

# Extensions de fichiers autorisés
allowed_extensions = ('.jpg', '.jpeg', '.png', '.webp')

def process_image(file_path, output_path):
    try:
        with Image.open(file_path) as img:
            # Ne traiter que les images dont l'une des dimensions est supérieure à 150 pixels
            if img.width <= 150 and img.height <= 150:
                print(f"Image ignorée (taille inférieure ou égale à 150px) : {file_path}")
                return
            
            # Redimensionner en conservant le ratio pour que ni la largeur ni la hauteur ne dépasse 150 pixels
            img.thumbnail((150, 150), Image.LANCZOS)
            
            ext = os.path.splitext(file_path)[1].lower()
            format = None
            kwargs = {}

            if ext in ('.jpg', '.jpeg'):
                # Pour JPEG, il est nécessaire de convertir en RGB
                img = img.convert("RGB")
                format = "JPEG"
                kwargs = {'quality': 70, 'optimize': True}  # Qualité entre 1 et 95
            elif ext == '.png':
                format = "PNG"
                kwargs = {'optimize': True}
            elif ext == '.webp':
                format = "WEBP"
                kwargs = {'quality': 70}

            # Sauvegarder l'image traitée
            img.save(output_path, format=format, **kwargs)
            print(f"Image traitée : {file_path}")
    except Exception as e:
        print(f"Erreur lors du traitement de {file_path} : {e}")

def main():
    for root, _, files in os.walk(ASSETS_DIR):
        for file in files:
            if file.lower().endswith(allowed_extensions):
                input_file = os.path.join(root, file)
                output_file = os.path.join(OUTPUT_DIR, file)
                process_image(input_file, output_file)

if __name__ == '__main__':
    main()