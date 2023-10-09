import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SolarslideshomeService {
  private entryScreenData = [
    {
      "step": 1,
      "title": "Start",
      "question": "Do you own your home?",
      "childSteps": [
        {
          "title": 'Start',
          "question": "Do you own your home?",
          "options": [
            {
              "img": 'assets/1/homeowner.svg',
              "type": 'Home Owner',
            },
            {
              "img": 'assets/1/renting.svg',
              "type": 'Renting',
            },
            {
              "img": 'assets/1/landlord.svg',
              "type": 'Landlord',
            },
          ],
        },
        {
          "title": "Your Home",
          "question": "What type of house do you have?",
          "options": [
            {
              "img": "assets/2/detached.svg",
              "type": "Detached"
            },
            {
              "img": "assets/2/semi-detached.svg",
              "type": "Semi-Detached"
            },
            {
              "img": "assets/2/terraced.svg",
              "type": "Terraced"
            },
            {
              "img": "assets/2/bungalow.svg",
              "type": "Bungalow"
            },
            {
              "img": "assets/2/flat.svg",
              "type": "Flat"
            }
          ]
        },
        {
          "title": "Your Consumption",
          "question": "What is your roof type?",
          "options": [
            {
              "img": "assets/3/pitched.svg",
              "type": "Pitched"
            },
            {
              "img": "assets/3/dormer.svg",
              "type": "Dormer"
            },
            {
              "img": "assets/3/flat.svg",
              "type": "Flat"
            }
          ]
        },
        {
          "title": "Location Pin",
          "question": "Does anything shade your roof?",
          "options": [
            {
              "img": "assets/4/yes.svg",
              "type": "Yes"
            },
            {
              "img": "assets/4/no.svg",
              "type": "No"
            }
          ]
        }
      ]
    },
    {
      "step": 2,
      "title": "Your Home",
      "question": "What is your anual consumption (kWh)?",
      "queries":"I don't know",
      "childSteps": [
        {
          "title": "Your Consumption",
          "question": "What is your anual consumption (kWh)?",
          "description": "Remember to check your energy bill if you are unsure",
          "queries":"I don't know",
          "placeholder":"kWh",
          "options": [],
        },
        {
          "title": "Your Consumption",
          "question": "How much does a Unit of Electricity cost you? ",
          "description": "Remember to check your energy bill if you are unsure",
          "queries":"I have different day / night rates.",
          "placeholder":"Unit rate in pence",
          "options": [],
        }
      ]
    },
    {
      "step": 3,
      "title": "Your Consumption",
      "question": "Do you own your home?",
      "childSteps": [
        {
          "title": 'Start',
          "question": "Do you own your home?",
          "queries":"I don't know",
          "options": [
            
          ],
        }
      ]
    },
    {
      "step": 4,
      "title": "Location Pin",
      "question": "Do you own your home?",
      "childSteps": [
        {
          "title": 'Start',
          "question": "Do you own your home?",
          "options": [
            
          ],
        }
      ]
    }
  ];

  constructor() { }

  getEntryScreenData() {
    return this.entryScreenData;
  }
}
