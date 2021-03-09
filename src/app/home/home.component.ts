//import { CdkDragDrop,moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Note } from '../shared/note.model';
import { NotesService } from '../shared/notes.service';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router'; 


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})


export class HomeComponent implements OnInit {

  notes: Note[] = new Array<Note>();
  filteredNotes : Note[] = new Array<Note>();
  @ViewChild('filterInput')
  filterInputElRef!: ElementRef<HTMLInputElement>;

  constructor(private notesService: NotesService,public authservice: AuthService, private router: Router) { }

  ngOnInit() {
    this.notes = this.notesService.getAll();
    this.filteredNotes = this.notesService.getAll();
  }


  deleteNote(note: Note){
    let noteId=this.notesService.getId(note);
    this.notesService.delete(noteId);
    this.filter(this.filterInputElRef.nativeElement.value);
  }

  generateNoteURL(note: Note){
    let noteId=this.notesService.getId(note);
    return noteId;
  }

  filter(query: string)
  {
     query = query.toLowerCase().trim();
     let allResults: Note[] = new Array<Note>();
     let terms: string[] = query.split(' ');
     terms = this.removeDuplicate(terms);

    terms.forEach(term =>{
      let results : Note[]= this.relevantNotes(term);
      allResults= [...allResults, ...results]
    });

    let uniqueResults = this.removeDuplicate(allResults);
    this.filteredNotes = uniqueResults;
  }

  removeDuplicate(arr : Array<any>) : Array<any>{
  let uniqueResults : Set<any> = new Set<any>();
  arr.forEach(e => uniqueResults.add(e))
  return Array.from(uniqueResults);
}


relevantNotes(query : any) : Array<Note>{

  query =query.toLowerCase().trim();
  let relevantNotes =this.notes.filter(note =>{
    if(note.title && note.title.toLowerCase().includes(query)){
      return true;
    }
    if(note.body && note.body.toLowerCase().includes(query)){
      return true;
    }
    return false;
  })
  return relevantNotes;
}

deleteall(){
  let index=this.filteredNotes.length;
  for(let i=index;i>0;i--){
    this.filteredNotes.pop();
  }

}

drop(event: CdkDragDrop<string[]>){
  moveItemInArray(this.filteredNotes,event.previousIndex,event.currentIndex);
}
}