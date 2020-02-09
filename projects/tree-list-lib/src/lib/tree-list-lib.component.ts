import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, AbstractControl, FormControl } from '@angular/forms';

interface IElement {
  text: string;
  checked: boolean;
}
interface ITreeNode {
  label: IElement;
  children: ITreeNode[];
}

@Component({
  selector: 'ng-tree-list',
  templateUrl: 'tree-list-lib.component.html',
  styles: []
})
export class TreeListLibComponent implements OnInit {
  testForm: FormGroup;

  public data: Array<ITreeNode> = [{
    label: { text: 'a', checked: false },
    children: [
      {
        label: { text: 'b', checked: false },
        children: []
      },
      {
        label: { text: 'c', checked: false },
        children: []
      },
      {
        label: { text: 'd', checked: false },
        children: []
      },
      {
        label: { text: 'e', checked: false },
        children: [
          {
            label: { text: 'f', checked: false },
            children: []
          },
          {
            label: { text: 'g', checked: false },
            children: []
          }
        ]
      }
    ]
  },
  {
    label: { text: 'a', checked: false },
    children: [
      {
        label: { text: 'b', checked: false },
        children: []
      },
      {
        label: { text: 'c', checked: false },
        children: []
      },
      {
        label: { text: 'd', checked: false },
        children: []
      },
      {
        label: { text: 'e', checked: false },
        children: [
          {
            label: { text: 'f', checked: false },
            children: []
          },
          {
            label: { text: 'g', checked: false },
            children: []
          }
        ]
      }
    ]
  }
  ];

  constructor(private formBuilder: FormBuilder) {
  }

  buildForm(item: ITreeNode) {
    const group: { [id: string]: AbstractControl } = {};
    if (item.hasOwnProperty('label')) {
      group.label = new FormControl(item.label.checked);
      group.text = new FormControl(item.label.text);
    }

    if (item.children) {
      group.children = this.formBuilder.array(item.children.map(el => this.buildForm(el)));
    }

    return this.formBuilder.group(group);
  }

  ngOnInit() {
    this.testForm = this.formBuilder.group({
      children: this.formBuilder.array(this.data.map(x => this.buildForm(x)))
    });

    // this.testForm.valueChanges.pipe(
    //   // tap(data => console.log(data))
    // ).subscribe();
  }

  OnChange($event) {
    const test = $event.target.id.split('.');
    // console.log($event.target.id);
    // console.log(test);
    console.log(this.testForm.get($event.target.id).value);
    const formSet = this.testForm.get($event.target.id).value;
    const children = this.setChildren(formSet.children, formSet.label);
    this.testForm.get($event.target.id).setValue({...formSet, children});
  }

  setIndeterminateParent(parentIndexes) {
    for (let i = 1; i <= parentIndexes.length; i += 2) {

    }
  }

  setChildren(children, value: boolean) {
    if (children && children.length > 0) {
      return children.map(x => ({ ...x, label: value, children: this.setChildren(x.children, value) }));
    }
    return [];
  }

  onSubmit() {
    console.log(this.testForm.value);
  }

}
