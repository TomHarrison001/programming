from django.test import TestCase
from django.utils import timezone

from .models import Task

class TaskModelTests(TestCase):
    def test_task_returns_title(self):      # func must start with 'test' to be recognised
        """
        str(task) returns the task's title
        """
        task = Task(title='new task', created=timezone.now(), description='')
        self.assertEqual(task.title, 'new task')
