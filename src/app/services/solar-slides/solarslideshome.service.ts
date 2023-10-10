import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SolarslideshomeService {
  private entryScreenData = [
    {
      "step": 1,
      "title": "Your Home",
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
      "title": "Your Consumption",
      "question": "What is your anual consumption (kWh)?",
      "queries": "I don't know",
      "childSteps": [
        {
          "title": "Your Consumption",
          "question": "What is your anual consumption (kWh)?",
          "description": "Remember to check your energy bill if you are unsure",
          "queries": "I don't know",
          "placeholder": "kWh",
          "options": [],
        },
        {
          "title": "Your Consumption",
          "question": "How much does a Unit of Electricity cost you? ",
          "description": "Remember to check your energy bill if you are unsure",
          "queries": "I have different day / night rates.",
          "placeholder": "Unit rate in pence",
          "options": [],
        }
      ]
    },
    {
      "step": 3,
      "title": "Location Pin",
      "question": "Do you own your home?",
      "itemsList": [
        {
          "title": 'Get Started',
          "question": "Do you own your home?",
          "description": "Get Started",
          "options": [
            {
              "img": 'assets/7/drag-the-map-bg.png',
              "type": '',
              "description": "Locate your house by dragging the map.",
              "name": "Drag the map"
            },
            {
              "img": 'assets/7/use-zoom-bg.png',
              "type": '',
              "description": "Locate your house by dragging the map.",
              "name": "Use the zoom controls"
            },
            {
              "img": 'assets/7/drop-pin-bg.png',
              "type": '',
              "description": "Tap to drop the pin on your rooftop.",
              "name": "Drop the pin"
            },
          ],
        },
      ],
      "childSteps": []
    },
    {
      "step": 4,
      "title": "Google Maps",
      "question": "Do you own your home?",
      "childSteps": []
    }
  ];

  constructor() { }

  getEntryScreenData() {
    return this.entryScreenData;
  }
}
