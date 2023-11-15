from django.shortcuts import render, HttpResponse

# Create your views here.

def home(request):    
    return render (request, "core/home.html")

def services(request):
    return render (request, "core/services.html")

def history(request):
    return render (request, "core/history.html")

def create_sku(request):
    if request.method == 'POST':
        # Obtener los datos del formulario
        marca = request.POST.get('marca')
        nombre = request.POST.get('nombre')
        categoria = request.POST.get('categoria')
        tipo_manejo = request.POST.get('opcionesSelect')
        valor_numerico = request.POST.get('unikg')

        # Validar y construir SKU
        if tipo_manejo == 'unidades':
            sku = marca + nombre + categoria + valor_numerico[:4]
        else:
            sku = marca + nombre + categoria + valor_numerico[:4] + 'KG'

        # Renderizar la plantilla con el SKU generado
        return render(request, 'core/create_sku.html', {'sku': sku})

    # Renderizar el formulario vacío si no se ha enviado aún
    return render(request, 'core/create_sku.html')