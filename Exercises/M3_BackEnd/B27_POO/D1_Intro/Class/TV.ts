class Tv {
    private _brand: string
    private _size: number
    private _resolution: number
    private _connections: string[]
    private _connectedTo!: string

  constructor(brand: string, size: number, resolution: number, connections: string[]) {
    console.log(`Criando Tv da marca ${brand}`)
    this._brand = brand;
    this._size = size;
    this._resolution = resolution;
    this._connections = connections;
  }

  get connectedTo(): string {
    return this._connectedTo
  }

  set connectedTo(value: string) {
    if (this._connections.includes(value)) {
      this.connectedTo = value
      console.log(`Connected at ${value}.`)
    } else {
      console.log(`Connection to ${value} unavailable!`)
    }
  }

  turnOn(): void {
    console.log('Click ... it\'s on')
  }
}

const lg = new Tv('lg', 32, 1080, ['HDMI', 'Bluetooth']);