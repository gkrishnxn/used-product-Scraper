# Generated by Django 5.0.6 on 2024-05-29 19:23

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Car',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('model', models.CharField(max_length=100)),
                ('year', models.IntegerField()),
                ('kms_driven', models.IntegerField()),
                ('fuel_type', models.CharField(max_length=50)),
                ('transmission', models.CharField(max_length=50)),
                ('price_rs', models.IntegerField()),
                ('location', models.CharField(max_length=100)),
                ('link', models.URLField()),
            ],
        ),
    ]
