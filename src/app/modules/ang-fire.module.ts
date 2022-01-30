import { NgModule } from "@angular/core";
import { provideFirebaseApp, getApp, initializeApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { AngularFireModule } from '@angular/fire/compat';
import { environment  } from "src/environments/environment";

@NgModule({
    imports: [
            provideFirebaseApp(()=> initializeApp(environment.firebaseConfig)),
            provideFirestore(() => getFirestore()),
            AngularFireModule.initializeApp(environment.firebaseConfig)
    ]
})

export class AngFirebaseModule {}