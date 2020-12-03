import { observable } from "mobx";

export class StoreWhatsNew {
    @observable fetching = false;
    @observable whatsNewData = [
        {message:"Today is Sachin's birthday", type:'student',link:'localhost:3000/student/ggggfgffre'},
        {message:"Today is Tarun's birthday", type:'student',link:'localhost:3000/student/e43segcs'},
        {message:"Today is Deepawali", type:'festival',link:'localhost:3000/fest/e43segcs'},
        {message:"Today is Deepawali", type:'festival',link:'localhost:3000/fest/e43segcs'},
        {message:"Today is Deepawali", type:'festival',link:'localhost:3000/fest/e43segcs'},
        {message:"Today is Deepawali", type:'festival',link:'localhost:3000/fest/e43segcs'},
        {message:"Today is Deepawali", type:'festival',link:'localhost:3000/fest/e43segcs'},
    ];

    public fetch = async () => {
        //
    }
}