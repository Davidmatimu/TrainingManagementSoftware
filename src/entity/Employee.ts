import { Entity, PrimaryGeneratedColumn, Column , BaseEntity} from "typeorm"

@Entity('Employee')
export class Employee extends BaseEntity{

    @PrimaryGeneratedColumn()
    id: number

    @Column({
        length:50
    })
    Trainee_First_Name: string

    @Column({
        length:50
    })
    Trainee_Last_Name: string

    @Column({
        length:50,
        nullable:true
    })
    Trainee_MI: string
    
    @Column({
        length:50,
        nullable:true
    })
    Trainee_Home_Address: string
    
    @Column({
        length:50,
        nullable:true
    })
    Trainee_Home_Telephone: string

    @Column({
        length:50,
        nullable:true
    })
    Traine_Position_Level: string

    @Column({
        length:50,
        nullable:true
    })
    Trainee_Mailing_Address: string

    @Column({
        length:50,
        nullable:true
    })
    Trainee_Office_Telephone: string

    @Column({
        length:50,
        nullable:true
    })
    Trainee_Work_Email: string

    @Column({
        length:50,
        nullable:true
    })
    Trainee_Position_Title: string

    @Column({
        length:50,
        nullable:true
    })
    Trainee_Accommodation: string

    @Column({
        length:50,
        nullable:true
    })
    Trainee_Accommodation_Requirements: string

    @Column({
        length:50,
        nullable:true
    })
    Trainee_Appointment: string

    @Column({
        length:50,
        nullable:true
    })
    Trainee_Education_Level: string

    @Column({
        length:50,
        nullable:true
    })
    Trainee_Pay_Plan: string
    
    @Column({
        length:50,
        nullable:true
    })
    Trainee_Pay_Series: string

    @Column({
        length:50,
        nullable:true
    })
    Trainee_Pay_Grade: string
    
    @Column({
        length:50,
        nullable:true
    })
    Trainee_Pay_Step: string
    
}
