import { Component, OnInit } from "@angular/core";
import { Model } from "./repository.model";
import { Product } from "./product.model";
import { NgModel, ValidationErrors, NgForm } from "@angular/forms";
import { Observable } from "rxjs";

@Component({
    selector: "app",
    templateUrl: "template.html"
})
export class ProductComponent implements OnInit {

    model: Model = new Model();
    products: Product[] = [];

    counter?: Observable<number>;

    ngOnInit(): void {
        this.products = this.getProducts();
        this.counter = new Observable(observer => {
            let value = 0;
            const interval = setInterval(() => {
                observer.next(value++);
                this.newProduct.name += "s";
            }, 1000); 

            return () => clearInterval(interval);
        });

    }

    getProduct(key: number): Product | undefined {
        return this.model.getProduct(key);
    }

    getProducts(): Product[] {
        return this.model.getProducts();
    }

    newProduct: Product = new Product();

    get jsonProduct() {
        return JSON.stringify(this.newProduct);
    }

    get className() {
        return "btn";
    }

    addProduct(p: Product) {
        console.log("New Product: " + this.jsonProduct);
    }

    getClasses(): Object {
        return {btn: true,
        'btn-primary': false};
    }

    btnBlaClicked(input: string):void {
        console.log(input);
    }

    getMessages(errs : ValidationErrors | null, name: string) : string[] {
        let messages: string[] = [];
        for (let errorName in errs) {
            switch (errorName) {
                case "required":
                    messages.push(`You must enter a ${name}`);
                    break;
                case "minlength":
                    messages.push(`A ${name} must be at least
                        ${errs['minlength'].requiredLength}
                        characters`);
                    break;
                case "pattern":
                    messages.push(`The ${name} contains
                         illegal characters`);
                    break;
            }
        }
        return messages;
    }

    getValidationMessages(state: NgModel, thingName?: string) {
        let thing: string = state.path?.[0] ?? thingName;
        return this.getMessages(state.errors, thing)
    }    

    formSubmitted: boolean = false;

    submitForm(form: NgForm) {
        this.formSubmitted = true;
        if (form.valid) {
            this.addProduct(this.newProduct);
            this.newProduct = new Product();
            form.resetForm();
            this.formSubmitted = false;
            this.products = this.getProducts();
        }
    }    

    getFormValidationMessages(form: NgForm): string[] {
        let messages: string[] = [];
        Object.keys(form.controls).forEach(k => {
            this.getMessages(form.controls[k].errors, k)
                .forEach(m => messages.push(m));
        });
        return messages;
    }    
}
