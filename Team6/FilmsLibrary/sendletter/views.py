from django.shortcuts import render
from django.core.mail import send_mail, BadHeaderError
from .models import Films
from django.http import JsonResponse
#(.>_<.)

def showFilm(request):


    all_films = Films.objects.all()
    context = {'all_films': all_films}

    name = request.POST.get('name')
    message = request.POST.get('message')
    mail = 'toirot1999@gmail.com'

    text_letter = f"Клієнт {name} залишив свій відгук: {message}"

    send_mail("Відгук користувача", text_letter, 'setings.EMAIL_HOST_USER', [mail])

    return render(request, 'index.html', context = context)
