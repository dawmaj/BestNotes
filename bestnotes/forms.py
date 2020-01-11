from django import forms
from tinymce.widgets import TinyMCE

class EditorForm(forms.Form):
    content = forms.CharField(widget=TinyMCE(attrs={'cols': 80, 'rows': 30}),required=True)
    subject = forms.CharField(label="subject", max_length=30, required=True)
    topic = forms.CharField(label="topic", max_length=30, required=True)
    name = forms.CharField(label="name", max_length=30, required=True)