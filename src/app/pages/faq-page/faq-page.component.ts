import {Component} from '@angular/core';
import {NavbarThemeDirective} from '../../components/navbar/navbar-theme.directive';
import {RouterLink} from '@angular/router';

interface ActionLink {
  label: string;
  route: string;
  variant: 'solid' | 'transparent';
}

@Component({
  selector: 'app-faq-page',
  imports: [
    NavbarThemeDirective,
    RouterLink
  ],
  templateUrl: './faq-page.component.html',
  styleUrl: './faq-page.component.css',
})
export class FaqPageComponent {
  openIndex: number | null = null;

  faqs = [
    {
      question: "How does Mbagi work?",
      answer: "Mbagi connects food donors with people in need. Donors list surplus food, and nearby users can claim and pick it up within the specified time window."
    },
    {
      question: "How do I know the food is safe to donate?",
      answer: "All donors are responsible for ensuring food is safe and within its consumption period. We provide guidelines and users can report any quality issues."
    },
    {
      question: "Is there a cost to listing food?",
      answer: "No. Our mission is to eliminate food waste and support the community. Listing food on our platform is completely free for businesses."
    },
    {
      question: "Are there rewards for volunteering?",
      answer: "Yes! Active volunteers earn impact points that unlock badges and special recognition in the community leaderboard."
    },
    {
      question: "What if the food I pick up is spoiled?",
      answer: "Please report it immediately through the app. We take quality seriously and will investigate and take action against repeated offenders."
    },
    {
      question: "What happens if I can't make it to my pickup?",
      answer: "Please cancel as early as possible so others can claim the food. Repeated no-shows may result in temporary account restrictions."
    },
    {
      question: "How do I \"Check-in\" when I arrive at the store?",
      answer: "Open the listing in the app and tap 'Check In' when you arrive. The donor will receive a notification to prepare your order."
    },
  ];

  heroActions: ActionLink[] = [
    {
      label: 'Mulai Berbagi',
      route: '',
      variant: 'solid',
    },
    {
      label: 'Jelajahi Listing',
      route: '/discover-food',
      variant: 'transparent',
    },
  ];

  toggle(index: number) {
    this.openIndex = this.openIndex === index ? null : index;
  }
}
