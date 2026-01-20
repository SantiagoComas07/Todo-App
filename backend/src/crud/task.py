from ..db.base import BaseRepository
from ..models import Task


class TaskProcessDb(BaseRepository): 
    def create(self, task:Task):
        return self.add(task)
    def update_task(self, task:Task, data:dict):
        return self.update(task, data)
    def delete_task(self, task: Task):
        self.delete(task)