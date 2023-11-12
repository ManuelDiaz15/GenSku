from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    #Paths Core path('core/',include('core.urls')) " core/home " ||| path('',include('core.urls'))  " /home "
    path('',include('core.urls')),
    #Paths admin
    path('admin/', admin.site.urls),
]
