// Classes can used for:
// (1) As an real object (instant of a class)
// (2) Data container 

// Classes as Real Object:
// Here, constructors and methods are available along with variables.
// methods within a class is also refered as " Class APIs".
let sqlEngine: any;

class Database {
  private uri: string;
  private provider: any;
  public connection: any;

  constructor(uri: string, provider: any) {
    this.uri = uri;
    this.provider = provider;
  }

  connect() {
    try {
      this.connection = this.provider.establishConnection(this.uri);
    } catch (error) {
      throw new Error('Could not connect!');
    }
  }

  disconnect() {
    this.connection.close();
  }
}

const database = new Database('my-database:8100', sqlEngine);
database.connect();

database.connection.close();




// Class as Data Container:
// Here, along variables are avaialbe.

class UserCredentials {
  public email: string;
  public password: string;
}

