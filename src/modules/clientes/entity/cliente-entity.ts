import { Entity, Column, PrimaryGeneratedColumn, PrimaryColumn } from 'typeorm';

@Entity('clientes')
export class ClienteEntity {

    @PrimaryColumn()
    cliente_id: number;

    @Column({ length: 50, unique: true })
    nombre_usuario: string;

    @Column({ length: 50 })
    contrasena: string;

    @Column({ length: 50 })
    nombre: string;

    @Column({ length: 50 })
    apellidos: string;

    @Column({ length: 50, unique: true })
    correo_electronico: string;

    @Column()
    edad: number;

    @Column({ type: 'decimal' })
    estatura: number;

    @Column({ type: 'decimal' })
    peso: number;

    @Column({ type: 'decimal' })
    imc: number;

    @Column({ type: 'decimal' })
    geb: number;

    @Column({ type: 'decimal' })
    eta: string;

    @Column({ type: 'date' })
    fecha_creacion: Date;

    @Column({ type: 'date' })
    fecha_actualizacion: Date;

}
