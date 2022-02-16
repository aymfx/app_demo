interface todoProps {
    onChangeTaskStatus: (itemId:string,isCompleted:boolean) => void;
    isCompleted:boolean;
    itemId:string,
    taskName:string
}