import { trigger,animate,transition,style,query} from "@angular/animations";


export const fader=
trigger('routeAnimations',[
    transition('*<=>*',[
        query(':enter,:leave',[
            style({
                poition: 'absolute',
                left: 0,
                width: '100%',
                opacity: 0,
                transform: 'scale(0) translateY(100%)',
            }),
        ]),
        query(':enter',[
            animate('200ms ease',
            style({ opacity: 1, transform: 'scale(1) translateY(0)' })
            ),
        ])
    ]),
]);