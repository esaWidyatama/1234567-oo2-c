export class Mahasiswa {
  public npm:string | null
  public nama:string
  public ipk:number

  constructor(npm: string, nama: string, ipk: number) {
    this.npm = npm
    this.nama = nama
    this.ipk = ipk
  }  
}