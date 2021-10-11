import { Component, OnInit } from '@angular/core';

@Component({
 selector: 'app-servers',
  // selector: '[app-servers]',
  // selector: '.app-servers',
  // template: `
  //   <p>servers works template!</p>
  //   <hr>
  //   <app-server></app-server>
  //   <app-server></app-server>
  // `,
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.scss']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No server was created!';
  serverName = '';
  serverCreated = false;
  servers = [
    'TestServer1', 'TestServer2'
  ];

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    },2000);
  }

  ngOnInit(): void {
  }

  onCreateServer() {
    //this.serverCreationStatus = "Server was created! Name is " + this.serverName;
    this.serverCreated = true;
    this.servers.push(this.serverName);
  }

  onUpdateServerName(event: Event) {
    console.log(event.target);
    this.serverName = (<HTMLInputElement>event.target).value;
  }

}
