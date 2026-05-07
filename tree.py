import os

# Carpeta raíz del proyecto
root_dir = "."

# Archivo de salida
output_file = "estructura_proyecto.txt"

# Carpetas que normalmente quieres ignorar
ignore_dirs = {
    ".git",
    "__pycache__",
    "node_modules",
    ".venv",
    "venv",
    "dist",
    "build"
}

with open(output_file, "w", encoding="utf-8") as f:

    def print_tree(current_dir, indent=""):
        items = sorted(os.listdir(current_dir))

        for index, item in enumerate(items):
            path = os.path.join(current_dir, item)

            # Ignorar carpetas
            if item in ignore_dirs:
                continue

            is_last = index == len(items) - 1

            connector = "└── " if is_last else "├── "

            f.write(indent + connector + item + "\n")

            if os.path.isdir(path):
                extension = "    " if is_last else "│   "
                print_tree(path, indent + extension)

    f.write(f"Estructura del proyecto: {os.path.abspath(root_dir)}\n\n")
    print_tree(root_dir)

print(f"Estructura guardada en '{output_file}'")