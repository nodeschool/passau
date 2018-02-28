# ReactStatic - Nodeschool Passau Websites

Dies ist ein ReactStatic Projekt, dass die Websites für Nodeschool Passau statisch generiert.
Verwende
- `react-static start` um eine lokalen dev-Server zu starten
- `npm run build` um die statischen Websites zu generieren

Um den Inhalt anzupassen, sind .tsx Files aus `src/containers/sections` zu verändern. Die anderen
Dateien verwalten und rendern die Seite als Ganzes.  
Eine eigene Section muss die Klasse `src/containers/Section.SectionComponent` erweitern und statische 
Attribute `id` und `title` besitzen. Außerdem benötigt sie eine `render()`-Funktion, die ein ReactNode 
berechnet. Damit eine Section auf der Startseite angezeigt wird, muss sie zudem in 
`src/containers/sections/HomeSections.homeSections` aufgeführt sein.  
Einfache React-Components sind bereits in `src/containers/sections/Utility` definiert.