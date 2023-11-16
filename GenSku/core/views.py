from django.shortcuts import render, HttpResponse

# Create your views here.

def home(request):    
    return render (request, "core/home.html")

def services(request):
    return render (request, "core/services.html")

def history(request):
    return render (request, "core/history.html")

from django.shortcuts import render, HttpResponse

from django.shortcuts import render, HttpResponse

from django.shortcuts import render, HttpResponse

def create_sku(request):
    if request.method == 'POST':
        # Obtener los datos del formulario
        marca = request.POST.get('marca')[:1].upper()
        nombre = request.POST.get('nombre')[:4].upper()
        categoria = request.POST.get('categoria')[:3].upper()
        opcion_unidades = request.POST.get('opcionUnidades')
        opcion_peso = request.POST.get('opcionPeso')
        valor_numerico = request.POST.get('unikg')[:4]

        # Validar y construir SKU
        if opcion_unidades:
            sku_suffix = 'UNI'
        elif opcion_peso:
            sku_suffix = 'KG'
        else:
            sku_suffix = ' ERROR INGRESA VALOR (UNI / KG) '  # Si ninguna opción está seleccionada

        sku = marca + nombre + categoria + valor_numerico + sku_suffix

        # Renderizar la plantilla con el SKU generado
        return render(request, 'core/create_sku.html', {'sku': sku})

    # Renderizar el formulario vacío si no se ha enviado aún
    return render(request, 'core/create_sku.html')
