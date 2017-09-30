import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';

import { Blog } from './../domain/blog';
import { BlogService } from './../services/blog.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  blogs: Blog[] = [];
  name: string;

  constructor(private service: BlogService, private login: AuthService) {}

  ngOnInit() {
    this.name = `Bem vindo ${this.login.usuario}!`;
  }

  public carregarBlogs() {
    this.service.getBlogs().subscribe(r => this.blogs = r);
  }
}
