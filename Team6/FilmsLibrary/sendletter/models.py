from django.db import models

class Films(models.Model):
    name = models.CharField(max_length=255)
    year = models.IntegerField()
    image = models.ImageField(upload_to='images/%Y/%m/%d') 

    def __str__(self):
        return self.name