# Generated by Django 2.2.7 on 2019-12-07 17:37

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('bestnotes', '0002_subject_topic'),
    ]

    operations = [
        migrations.CreateModel(
            name='Note',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=30)),
                ('text', models.TextField()),
                ('add_date', models.DateField()),
                ('topic', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='bestnotes.Topic')),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='bestnotes.StudentProfile')),
            ],
        ),
    ]