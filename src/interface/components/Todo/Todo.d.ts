interface todoProps {
  onChangeTaskStatus: (itemId: string, isCompleted: boolean) => void;
  onDeleteTask: (itemId: string) => void;
  item: Task;
}
