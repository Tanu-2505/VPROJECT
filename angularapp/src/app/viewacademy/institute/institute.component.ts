import { Component } from '@angular/core';
import { Router } from '@angular/router';

type Institue = Array<{ id: number; name: string; src:String; Place:String; rating:number}>;


@Component({
  selector: 'app-institute',
  templateUrl: './institute.component.html',
  styleUrls: ['./institute.component.css']
})
export class InstituteComponent {

  constructor(private router: Router){}
  searchText!:string;
  institutes : Institue = [
                            { id: 1, name: "PSG CAS", src: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y29sbGVnZXxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80",Place :"Coimbatore",rating:5},
                            { id: 2, name: "BIT", src: "https://static.businessworld.in/article/article_extra_large_image/1616143247_9SQluK_Bannari_Amman_Institute_of_Technology.jpg",Place :"Sathyamangalam",rating:4},
                            { id: 3, name: "SRI KRISHNA", src: "https://i.ytimg.com/vi/hhArRZNWRj0/maxresdefault.jpg",Place :"Coimbatore",rating:3},
                            { id: 4, name: "PSG CAS", src: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y29sbGVnZXxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80",Place :"Coimbatore",rating:5},
                            { id: 5, name: "BIT", src: "https://static.businessworld.in/article/article_extra_large_image/1616143247_9SQluK_Bannari_Amman_Institute_of_Technology.jpg",Place :"COIMBATORE",rating:4},
                            { id: 6, name: "SRI KRISHNA", src: "https://i.ytimg.com/vi/hhArRZNWRj0/maxresdefault.jpg",Place :"Coimbatore",rating:3},
                            { id: 7, name: "SRI KRISHNA", src: "https://i.ytimg.com/vi/hhArRZNWRj0/maxresdefault.jpg",Place :"Coimbatore",rating:3},
                            { id: 8, name: "SRI KRISHNA", src: "https://i.ytimg.com/vi/hhArRZNWRj0/maxresdefault.jpg",Place :"Coimbatore",rating:3},
                            { id: 9, name: "SRI KRISHNA", src: "https://i.ytimg.com/vi/hhArRZNWRj0/maxresdefault.jpg",Place :"Coimbatore",rating:3},
                            { id: 10, name: "PSG CAS", src: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y29sbGVnZXxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80",Place :"Coimbatore",rating:5},
                            { id: 11, name: "BIT", src: "https://static.businessworld.in/article/article_extra_large_image/1616143247_9SQluK_Bannari_Amman_Institute_of_Technology.jpg",Place :"Sathyamangalam",rating:4},
                            { id: 12, name: "SRI KRISHNA", src: "https://i.ytimg.com/vi/hhArRZNWRj0/maxresdefault.jpg",Place :"Coimbatore",rating:3},
                            { id: 13, name: "PSG CAS", src: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y29sbGVnZXxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80",Place :"Coimbatore",rating:5},
                          ];

    gotocourse()
    {
      this.router.navigate(['/user/courselist']);
    }

}
