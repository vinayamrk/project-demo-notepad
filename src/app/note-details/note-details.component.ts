import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Note } from 'src/app/shared/note.model';
import { NotesService } from '../shared/notes.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-note-details',
  templateUrl: './note-details.component.html',
  styleUrls: ['./note-details.component.scss']
})
export class NoteDetailsComponent implements OnInit {
  
  note!: Note;
  noteId!: number;
  new: boolean = false;

  constructor(private notesService: NotesService,private router: Router,private route: ActivatedRoute) { 
   }

  ngOnInit() {
    this.note= new Note();
    this.route.params.subscribe((params : Params)=>{
      if(params.id){
        this.note = this.notesService.get(params.id);
        this.noteId = params.id;
        this.new= false;
      }
      else{
        this.new=true;
      }
    })  
}
  


onSubmit(form: NgForm){ 
  if(this.new){
  this.notesService.add(form.value);
  this.router.navigateByUrl('/');
  }
  else{
    this.notesService.update(this.noteId,form.value.title,form.value.body);
  }
  this.router.navigateByUrl('/');
 }


 
 cancel()
 {
  Swal.fire({
    title: 'Are you sure?',
    text: 'You will not be able to recover this note!',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Yes, cancel it!',
    cancelButtonText: 'No, keep it'
  }).then((result) => {
    if (result.value) {

      this.router.navigateByUrl('/');
    } else if (result.dismiss === Swal.DismissReason.cancel) {
    }
  }) 

 }


}
