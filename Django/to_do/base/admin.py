from django.contrib import admin

from .models import Task

class TaskAdmin(admin.ModelAdmin):
    fieldsets = [
        (None, {"fields": ["title"]}),
        ("Task", {"fields": ["user", "description", "complete"],
#                  "classes": ["collapse"]}),
        }),
    ]
    list_display = ["title", "user", "description", "complete", "created"]
    list_filter = ["created"]
    search_fields = ["title", "user"]

admin.site.register(Task, TaskAdmin)
