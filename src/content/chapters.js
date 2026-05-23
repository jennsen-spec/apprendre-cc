export const courseTitle    = "Maîtriser Claude Code"
export const courseSubtitle = "Tout ce que Melvynx a appris en 300 jours d'utilisation quotidienne — de l'installation aux workflows professionnels."
export const courseMeta     = { chapters: 24, duration: "6-8 heures", level: "Débutant → Avancé" }

export const chapters = [

  // ─── PARTIE 1 — COMPRENDRE CLAUDE CODE ───────────────────────────────────

  {
    id: 0,
    title: "Claude Chat vs API vs Claude Code",
    emoji: "🧠",
    duration: "10 minutes",
    section: "Partie 1 — Comprendre Claude Code",
    learn: [
      { type: 'paragraph', text: "Avant de commencer, il faut lever une confusion fréquente : Claude Chat, Claude API et Claude Code sont trois produits très différents, même s'ils utilisent le même modèle d'IA." },
      { type: 'heading', text: "Claude Chat — le mode question/réponse" },
      { type: 'paragraph', text: "Claude Chat, c'est l'interface sur claude.ai. Tu poses une question, Claude répond. C'est du one-shot : chaque échange est indépendant. Utile pour obtenir une information, rédiger un texte, répondre à une question. Mais Claude ne fait rien sur ton ordinateur — il parle, c'est tout." },
      { type: 'heading', text: "Claude API — pour les développeurs" },
      { type: 'paragraph', text: "L'API permet aux développeurs d'envoyer des requêtes directement au modèle depuis leur code. C'est aussi du one-shot par défaut. L'API est utilisée pour intégrer Claude dans une application existante. Elle ne fait rien de plus que répondre." },
      { type: 'heading', text: "Claude Code — le mode agentique" },
      { type: 'paragraph', text: "Claude Code est fondamentalement différent. Il vit dans ton terminal et agit en mode agentique : au lieu de répondre une seule fois, il enchaîne des actions sur ton ordinateur — lire des fichiers, modifier du code, exécuter des commandes, chercher sur internet — jusqu'à terminer la tâche." },
      { type: 'comparison', left: { title: "Claude Chat / API", text: "Tu poses une question → Claude répond → terminé. Claude ne touche à rien sur ton ordinateur." }, right: { title: "Claude Code", text: "Tu donnes une tâche → Claude explore, planifie, modifie des fichiers, exécute des commandes → tâche accomplie." } },
      { type: 'callout', variant: 'key', title: "La métaphore du cuisinier", text: "Claude Chat te dit comment faire des pâtes. Claude Code, lui, va dans ta cuisine, ouvre le frigo, fait cuire les pâtes et te les sert." },
    ],
    verify: [
      { id: 'q1', question: "Quelle est la différence principale entre Claude Chat et Claude Code ?", options: [{ id: 'a', text: "Claude Code coûte plus cher" }, { id: 'b', text: "Claude Code agit sur ton ordinateur, Claude Chat répond seulement" }, { id: 'c', text: "Claude Chat est plus récent" }, { id: 'd', text: "Claude Code ne peut pas écrire de texte" }], correctAnswer: 'b', explanation: "Claude Code est agentique : il enchaîne des actions réelles (lire, modifier, exécuter) jusqu'à terminer la tâche. Claude Chat se limite à répondre." },
      { id: 'q2', question: "Claude Chat fonctionne en mode :", hint: "Chaque échange est indépendant.", options: [{ id: 'a', text: "Agentique" }, { id: 'b', text: "One-shot" }, { id: 'c', text: "Autonome" }, { id: 'd', text: "Parallèle" }], correctAnswer: 'b', explanation: "Claude Chat est one-shot : tu envoies un message, Claude répond, l'échange est terminé. Il n'enchaîne pas d'actions." },
      { id: 'q3', question: "Où vit Claude Code ?", options: [{ id: 'a', text: "Sur claude.ai" }, { id: 'b', text: "Dans le navigateur" }, { id: 'c', text: "Dans le terminal (ou VS Code)" }, { id: 'd', text: "Sur un serveur distant seulement" }], correctAnswer: 'c', explanation: "Claude Code s'installe et se lance depuis le terminal. Il peut aussi s'utiliser depuis le terminal intégré de VS Code." },
      { id: 'q4', question: "Lequel de ces usages correspond à Claude Code ?", options: [{ id: 'a', text: "Demander la météo de demain" }, { id: 'b', text: "Traduire un document" }, { id: 'c', text: "Créer une application React en modifiant des fichiers sur ton ordinateur" }, { id: 'd', text: "Faire un résumé d'article" }], correctAnswer: 'c', explanation: "Claude Code agit sur ton système de fichiers. Créer une application implique de modifier de nombreux fichiers — c'est exactement ce que Claude Code fait." },
      { id: 'q5', question: "À quoi sert Claude API ?", options: [{ id: 'a', text: "À utiliser Claude dans une interface graphique" }, { id: 'b', text: "À intégrer Claude dans une application via du code" }, { id: 'c', text: "À créer des sites web automatiquement" }, { id: 'd', text: "À gérer les permissions de sécurité" }], correctAnswer: 'b', explanation: "L'API permet aux développeurs d'interroger le modèle directement depuis leur code, pour l'intégrer dans leurs propres applications." },
    ],
    act: {
      title: "Observer la différence en direct",
      duration: "5 minutes",
      objective: "Poser la même question à Claude Chat et à Claude Code pour voir concrètement la différence de comportement.",
      steps: [
        { step: 1, instruction: "Ouvre claude.ai dans ton navigateur. Pose cette question : « Crée un fichier texte qui dit Bonjour. » Observe : Claude te dit comment faire, mais ne crée rien." },
        { step: 2, instruction: "Ouvre un terminal, navigue dans un dossier vide, et lance Claude Code. Pose la même question : « Crée un fichier texte qui dit Bonjour. »", tip: "Si Claude Code n'est pas encore installé, note simplement ce que tu observerais — tu l'installeras au chapitre suivant." },
        { step: 3, instruction: "Compare les deux résultats : Claude Chat t'a donné une réponse textuelle. Claude Code a créé un vrai fichier sur ton disque." },
      ],
      validation: "Tu as vu Claude Chat décrire une action sans l'exécuter, et Claude Code l'exécuter réellement en créant un fichier sur ton ordinateur."
    }
  },

  {
    id: 1,
    title: "La boucle agentique",
    emoji: "🔄",
    duration: "10 minutes",
    section: "Partie 1 — Comprendre Claude Code",
    learn: [
      { type: 'paragraph', text: "Comprendre la boucle agentique, c'est comprendre pourquoi Claude Code est si puissant. Ce n'est pas de la magie — c'est un mécanisme précis qui se répète jusqu'à la fin de la tâche." },
      { type: 'heading', text: "Le ping-pong entre le modèle et les outils" },
      { type: 'paragraph', text: "Quand tu donnes une tâche à Claude Code, voilà ce qui se passe : le modèle d'IA réfléchit et décide quelle action faire. Il appelle un outil (lire un fichier, exécuter une commande...). Claude Code exécute l'action et renvoie le résultat au modèle. Le modèle analyse le résultat et décide de la prochaine action. Cette boucle continue jusqu'à ce que la tâche soit terminée." },
      { type: 'highlight', text: "Le modèle pense. Claude Code agit. Ensemble ils forment une boucle infinie jusqu'au résultat." },
      { type: 'heading', text: "Les outils disponibles par défaut" },
      { type: 'list', title: "Claude Code a accès à ces outils dès l'installation :", items: ["Bash — exécuter des commandes dans le terminal", "Read — lire le contenu d'un fichier", "Edit / Write — modifier ou créer des fichiers", "Glob / Grep — chercher des fichiers ou du texte dans le projet", "WebFetch — récupérer le contenu d'une URL", "WebSearch — faire une recherche sur le web"] },
      { type: 'heading', text: "Exemple concret" },
      { type: 'paragraph', text: "Tu demandes : « Supprime tous les commentaires dans script.ts ». La boucle ressemble à ça : (1) le modèle appelle Read sur script.ts, (2) il reçoit le contenu, (3) il appelle Edit avec le nouveau contenu sans commentaires, (4) Claude Code modifie le fichier, (5) le modèle répond « C'est fait »." },
      { type: 'callout', variant: 'note', title: "Pourquoi c'est important", text: "Comprendre cette boucle t'aide à écrire de meilleures instructions. Plus ta tâche est précise, moins la boucle s'égare — et moins tu consommes de tokens." },
    ],
    verify: [
      { id: 'q1', question: "Dans la boucle agentique, qui exécute les actions physiques sur l'ordinateur ?", options: [{ id: 'a', text: "Le modèle d'IA directement" }, { id: 'b', text: "Claude Code (le software)" }, { id: 'c', text: "Le terminal uniquement" }, { id: 'd', text: "L'utilisateur" }], correctAnswer: 'b', explanation: "Le modèle décide quoi faire, mais c'est Claude Code (le logiciel dans ton terminal) qui exécute concrètement les actions sur ton ordinateur." },
      { id: 'q2', question: "Quand est-ce que la boucle agentique s'arrête ?", options: [{ id: 'a', text: "Après exactement 10 actions" }, { id: 'b', text: "Quand le modèle estime que la tâche est terminée" }, { id: 'c', text: "Après 5 minutes" }, { id: 'd', text: "Quand tu appuies sur Entrée" }], correctAnswer: 'b', explanation: "La boucle est infinie jusqu'à ce que le modèle estime avoir accompli la tâche. Il peut faire 3 actions comme 50, selon la complexité." },
      { id: 'q3', question: "Quel outil utilise Claude Code pour faire une recherche sur internet ?", options: [{ id: 'a', text: "Bash" }, { id: 'b', text: "Read" }, { id: 'c', text: "WebSearch" }, { id: 'd', text: "Grep" }], correctAnswer: 'c', explanation: "WebSearch est l'outil dédié aux recherches web. WebFetch, lui, récupère le contenu d'une URL précise." },
      { id: 'q4', question: "Que reçoit le modèle après qu'un outil est exécuté ?", options: [{ id: 'a', text: "Rien — il continue sans feedback" }, { id: 'b', text: "Le résultat de l'action, pour décider de la suite" }, { id: 'c', text: "Un message d'erreur systématique" }, { id: 'd', text: "L'approbation de l'utilisateur" }], correctAnswer: 'b', explanation: "Après chaque action, Claude Code renvoie le résultat au modèle. C'est ce résultat qui permet au modèle de planifier l'action suivante." },
      { id: 'q5', question: "Pourquoi comprendre la boucle agentique aide-t-il à mieux utiliser Claude Code ?", options: [{ id: 'a', text: "Pour pouvoir la désactiver" }, { id: 'b', text: "Pour écrire des instructions plus précises et consommer moins de tokens" }, { id: 'c', text: "Pour changer le modèle utilisé" }, { id: 'd', text: "Ça ne change rien en pratique" }], correctAnswer: 'b', explanation: "Une tâche précise génère une boucle courte et efficace. Une tâche vague force Claude à tâtonner, ce qui multiplie les appels d'outils et consomme plus de tokens." },
    ],
    act: {
      title: "Observer la boucle en action",
      duration: "10 minutes",
      objective: "Regarder Claude Code dérouler sa boucle agentique sur une tâche simple, en observant chaque appel d'outil.",
      steps: [
        { step: 1, instruction: "Dans un terminal, crée un dossier vide et lance Claude Code dedans.", tip: "mkdir demo-boucle && cd demo-boucle && claude" },
        { step: 2, instruction: "Donne cette tâche : « Crée un fichier index.html avec une page simple qui dit Bonjour le monde en HTML. » Observe chaque outil appelé dans le terminal (Write, Bash, etc.)." },
        { step: 3, instruction: "Une fois terminé, demande : « Maintenant ajoute un fichier style.css qui donne un fond sombre et du texte blanc. » Observe que Claude lit d'abord index.html avant de créer style.css — c'est la boucle en action." },
      ],
      validation: "Tu as vu Claude Code enchaîner au moins 3 appels d'outils différents pour accomplir une tâche simple, sans que tu aies eu à lui dire quoi faire à chaque étape."
    }
  },

  {
    id: 2,
    title: "Les 4 modes de Claude Code",
    emoji: "⚙️",
    duration: "10 minutes",
    section: "Partie 1 — Comprendre Claude Code",
    learn: [
      { type: 'paragraph', text: "Claude Code a quatre modes de fonctionnement. Chacun représente un niveau d'autonomie différent. Comprendre quand utiliser chacun te fait gagner un temps considérable." },
      { type: 'heading', text: "Mode 1 — Standard" },
      { type: 'paragraph', text: "Claude te demande une validation à chaque action importante : modifier un fichier, exécuter une commande, créer un dossier. Idéal quand tu débutes ou quand la tâche est risquée. Lent, mais sécurisé." },
      { type: 'heading', text: "Mode 2 — Accept Edits" },
      { type: 'paragraph', text: "Claude modifie les fichiers sans te demander, mais te demande encore pour les commandes bash. Un bon équilibre pour le développement quotidien : les modifications de code passent automatiquement, mais les commandes système sont validées." },
      { type: 'heading', text: "Mode 3 — Plan Mode" },
      { type: 'paragraph', text: "Claude réfléchit et produit un plan complet sans rien exécuter. Il liste exactement ce qu'il va faire, tu valides, puis il exécute. Parfait avant une grosse migration ou un refactoring important." },
      { type: 'heading', text: "Mode 4 — Bypass Permission" },
      { type: 'paragraph', text: "Claude est totalement autonome — il ne demande rien. C'est le mode le plus productif. La sécurité est assurée par une deny list (liste de commandes interdites) configurée dans settings.json. On verra ça au chapitre 7." },
      { type: 'callout', variant: 'key', title: "Comment switcher", text: "Appuie sur Shift+Tab pour changer de mode dans Claude Code. L'indicateur en bas de l'interface montre le mode actif." },
      { type: 'list', title: "Recommandation pratique :", items: ["Débutant : commence en Standard pour comprendre ce que Claude fait", "Usage quotidien : Accept Edits pour le code, Plan mode avant les gros changements", "Avancé : Bypass Permission avec une bonne deny list pour une productivité maximale"] },
    ],
    verify: [
      { id: 'q1', question: "En mode Standard, quand Claude demande-t-il une validation ?", options: [{ id: 'a', text: "Jamais — il est totalement autonome" }, { id: 'b', text: "Seulement pour les suppressions de fichiers" }, { id: 'c', text: "À chaque action importante : modifier un fichier, exécuter une commande" }, { id: 'd', text: "Uniquement en début de session" }], correctAnswer: 'c', explanation: "En mode Standard, Claude demande une validation avant chaque action significative. C'est le mode le plus sécurisé mais aussi le plus lent." },
      { id: 'q2', question: "Quel mode utiliser pour planifier sans rien exécuter ?", options: [{ id: 'a', text: "Accept Edits" }, { id: 'b', text: "Bypass Permission" }, { id: 'c', text: "Plan Mode" }, { id: 'd', text: "Standard" }], correctAnswer: 'c', explanation: "Plan Mode oblige Claude à produire un plan complet et à attendre ta validation avant d'exécuter quoi que ce soit." },
      { id: 'q3', question: "Comment changer de mode dans Claude Code ?", options: [{ id: 'a', text: "Ctrl+M" }, { id: 'b', text: "Shift+Tab" }, { id: 'c', text: "Commande /mode" }, { id: 'd', text: "Redémarrer Claude" }], correctAnswer: 'b', explanation: "Shift+Tab fait cycler entre les modes : Standard → Accept Edits → Plan Mode → Bypass Permission." },
      { id: 'q4', question: "En mode Bypass Permission, comment s'assurer que Claude ne fait pas de dégâts ?", options: [{ id: 'a', text: "Il n'y a aucun moyen — c'est risqué" }, { id: 'b', text: "En configurant une deny list dans settings.json" }, { id: 'c', text: "En n'utilisant jamais ce mode" }, { id: 'd', text: "En faisant des sauvegardes manuelles" }], correctAnswer: 'b', explanation: "La deny list dans settings.json bloque certaines commandes (rm -rf, sudo, etc.) même en Bypass Permission. On a les deux avantages : autonomie et sécurité." },
      { id: 'q5', question: "Quelle différence y a-t-il entre Accept Edits et Bypass Permission ?", options: [{ id: 'a', text: "Aucune différence" }, { id: 'b', text: "Accept Edits valide encore les commandes bash, Bypass ne demande rien" }, { id: 'c', text: "Accept Edits est plus rapide" }, { id: 'd', text: "Bypass Permission ne peut pas modifier de fichiers" }], correctAnswer: 'b', explanation: "En Accept Edits, les modifications de fichiers passent automatiquement mais les commandes bash sont encore validées. En Bypass, tout passe sans validation." },
    ],
    act: {
      title: "Tester les 4 modes",
      duration: "10 minutes",
      objective: "Passer d'un mode à l'autre et observer concrètement le comportement de Claude.",
      steps: [
        { step: 1, instruction: "Lance Claude Code dans un dossier de test. Vérifie que tu es en mode Standard (l'indicateur en bas doit le montrer)." },
        { step: 2, instruction: "Demande : « Crée un fichier test.txt avec le texte Bonjour. » Observe que Claude te demande confirmation avant de créer le fichier." },
        { step: 3, instruction: "Appuie sur Shift+Tab pour passer en Accept Edits. Refais la même demande avec un nouveau fichier. Observe que Claude crée le fichier sans demander." },
        { step: 4, instruction: "Appuie encore sur Shift+Tab pour atteindre Plan Mode. Demande : « Crée 3 fichiers HTML avec des contenus différents. » Observe que Claude liste son plan sans rien créer.", tip: "C'est le mode idéal avant une grosse tâche — tu peux corriger le plan avant qu'il s'exécute." },
      ],
      validation: "Tu as observé un comportement différent de Claude pour la même demande selon le mode actif."
    }
  },

  // ─── PARTIE 2 — INSTALLATION ET CONFIGURATION ────────────────────────────

  {
    id: 3,
    title: "Installer Claude Code",
    emoji: "💻",
    duration: "15 minutes",
    section: "Partie 2 — Installation et configuration",
    learn: [
      { type: 'paragraph', text: "L'installation de Claude Code prend moins de 5 minutes. Voici la marche à suivre selon ton système d'exploitation." },
      { type: 'heading', text: "Sur macOS et Linux" },
      { type: 'code', text: "curl -fsSL https://claude.ai/install.sh | bash" },
      { type: 'paragraph', text: "Ouvre un terminal (Commande+Espace sur Mac, cherche « Terminal »), colle cette commande et appuie sur Entrée. Après l'installation, ouvre un nouveau terminal et tape claude pour lancer." },
      { type: 'heading', text: "Sur Windows" },
      { type: 'paragraph', text: "Utilise WSL (Windows Subsystem for Linux) — Claude Code est beaucoup plus capable dans cet environnement. Cherche « Install WSL » sur Google pour activer WSL, puis utilise la commande macOS/Linux ci-dessus." },
      { type: 'heading', text: "Connexion au premier lancement" },
      { type: 'paragraph', text: "Lors du premier démarrage, Claude te propose de te connecter. Trois options : (1) avec ton compte Anthropic, (2) avec une clé API, (3) avec un compte Pro ou Max. Je recommande l'option compte — c'est la plus simple." },
      { type: 'callout', variant: 'warning', title: "Toujours lancer Claude dans un dossier", text: "Ne lance jamais Claude Code à la racine de ton ordinateur (~/). Crée toujours un dossier projet et lance Claude dedans. Sinon Claude a accès à tout ton système." },
      { type: 'heading', text: "Intégration VS Code" },
      { type: 'paragraph', text: "Installe VS Code depuis code.visualstudio.com. Pour lancer Claude depuis VS Code, ouvre le terminal intégré (Ctrl+` ou Cmd+`) et tape claude. Claude aura accès à tous les fichiers du projet ouvert." },
    ],
    verify: [
      { id: 'q1', question: "Quelle commande installe Claude Code sur macOS ?", options: [{ id: 'a', text: "npm install -g claude-code" }, { id: 'b', text: "curl -fsSL https://claude.ai/install.sh | bash" }, { id: 'c', text: "brew install claude" }, { id: 'd', text: "pip install claude-code" }], correctAnswer: 'b', explanation: "La commande officielle utilise curl pour télécharger et exécuter le script d'installation depuis claude.ai." },
      { id: 'q2', question: "Pourquoi utiliser WSL sur Windows ?", options: [{ id: 'a', text: "Claude Code est gratuit sur WSL" }, { id: 'b', text: "Claude Code fonctionne mieux dans un environnement Linux" }, { id: 'c', text: "Windows bloque Claude sinon" }, { id: 'd', text: "Pour avoir accès à plus de tokens" }], correctAnswer: 'b', explanation: "Claude Code est nativement conçu pour Linux/macOS. WSL donne un environnement Linux sur Windows, ce qui améliore considérablement les performances et la compatibilité." },
      { id: 'q3', question: "Pourquoi ne faut-il pas lancer Claude à la racine du système ?", options: [{ id: 'a', text: "Ça ralentit Claude" }, { id: 'b', text: "Claude n'aurait pas accès aux fichiers" }, { id: 'c', text: "Claude aurait accès à tout le système — risque de modifier des fichiers sensibles" }, { id: 'd', text: "L'installation échoue à la racine" }], correctAnswer: 'c', explanation: "Claude Code peut lire et modifier tous les fichiers du dossier où il est lancé. Le lancer à la racine lui donne accès à l'intégralité du système." },
      { id: 'q4', question: "Comment lancer Claude Code depuis VS Code ?", options: [{ id: 'a', text: "Via une extension dédiée à installer" }, { id: 'b', text: "Dans le terminal intégré de VS Code en tapant claude" }, { id: 'c', text: "Via le menu Extensions" }, { id: 'd', text: "En glissant-déposant des fichiers" }], correctAnswer: 'b', explanation: "Claude Code est un outil de terminal. Il suffit d'ouvrir le terminal intégré de VS Code et de taper claude — il a alors accès à tout le projet ouvert." },
      { id: 'q5', question: "Après l'installation, si la commande claude ne fonctionne pas, que faut-il faire ?", options: [{ id: 'a', text: "Réinstaller le système" }, { id: 'b', text: "Ouvrir un nouveau terminal" }, { id: 'c', text: "Redémarrer l'ordinateur obligatoirement" }, { id: 'd', text: "Contacter le support" }], correctAnswer: 'b', explanation: "L'installation modifie le PATH du terminal. Ouvrir un nouveau terminal recharge le PATH et rend la commande claude disponible." },
    ],
    act: {
      title: "Installation et premier lancement",
      duration: "10 minutes",
      objective: "Installer Claude Code, se connecter et créer sa première application en une commande.",
      steps: [
        { step: 1, instruction: "Ouvre un terminal et exécute la commande d'installation. Si tu es sur Windows, assure-toi d'utiliser WSL.", tip: "curl -fsSL https://claude.ai/install.sh | bash" },
        { step: 2, instruction: "Ouvre un nouveau terminal, crée un dossier test-claude et navigue dedans.", tip: "mkdir test-claude && cd test-claude" },
        { step: 3, instruction: "Lance Claude avec la commande claude, connecte-toi avec ton compte Anthropic." },
        { step: 4, instruction: "Envoie ce prompt : « Crée une page HTML simple avec un titre qui dit Bonjour Claude Code et un bouton qui affiche une alerte. » Observe Claude créer le fichier automatiquement." },
      ],
      validation: "Claude Code est installé, tu es connecté, et un fichier HTML a été créé dans ton dossier par Claude Code sans que tu aies écrit une seule ligne de code."
    }
  },

  {
    id: 4,
    title: "Commandes, raccourcis et caractères spéciaux",
    emoji: "⌨️",
    duration: "10 minutes",
    section: "Partie 2 — Installation et configuration",
    learn: [
      { type: 'paragraph', text: "Claude Code a une interface de terminal avec des raccourcis et caractères spéciaux qui accélèrent énormément le travail. En les connaissant, tu évites de sortir de Claude pour faire des opérations simples." },
      { type: 'heading', text: "Les 3 caractères spéciaux" },
      { type: 'list', items: ["@ — cibler un fichier précis. Tape @src/App.jsx pour inclure ce fichier dans le contexte de ta question. Claude le lira directement.", "/ — lancer une commande Claude. /usage pour voir ta consommation, /model pour changer de modèle, /clear pour vider le contexte, /mcp pour voir les MCP actifs.", "! — exécuter une commande bash sans quitter Claude. !pnpm dev lance ton serveur, !git status vérifie l'état du repo." ] },
      { type: 'heading', text: "Les raccourcis clavier essentiels" },
      { type: 'list', items: ["Shift+Tab — changer de mode (Standard → Accept Edits → Plan Mode → Bypass Permission)", "Escape Escape (deux fois) — effacer le texte en cours ou naviguer dans l'historique", "Ctrl+T — afficher les tâches en cours", "Ctrl+O — afficher le transcript détaillé (tous les outils appelés)", "Ctrl+S — sauvegarder le prompt en cours pour y revenir plus tard"] },
      { type: 'callout', variant: 'key', title: "Astuce pro avec @", text: "Quand tu poses une question sur un bug, utilise @ pour cibler le fichier concerné. Claude obtient exactement le contexte dont il a besoin sans avoir à explorer tout le projet." },
      { type: 'heading', text: "La commande /clear" },
      { type: 'paragraph', text: "/clear vide le contexte de la conversation. Utile quand tu passes d'une tâche à une autre ou quand le contexte devient trop grand. Claude oublie tout ce qui a été dit, mais les fichiers modifiés restent." },
    ],
    verify: [
      { id: 'q1', question: "Quel caractère utilise-t-on pour cibler un fichier spécifique dans le contexte ?", options: [{ id: 'a', text: "#" }, { id: 'b', text: "@" }, { id: 'c', text: "$" }, { id: 'd', text: "!" }], correctAnswer: 'b', explanation: "@ permet de taguer un fichier. Claude le lit et l'inclut dans le contexte de la conversation, ce qui améliore la précision des réponses." },
      { id: 'q2', question: "Comment exécuter une commande bash sans quitter Claude Code ?", options: [{ id: 'a', text: "En tapant la commande directement" }, { id: 'b', text: "Avec le préfixe /" }, { id: 'c', text: "Avec le préfixe !" }, { id: 'd', text: "En ouvrant un autre terminal" }], correctAnswer: 'c', explanation: "Le préfixe ! exécute une commande bash directement. !pnpm dev, !git status, etc. — tu restes dans Claude tout en exécutant des commandes système." },
      { id: 'q3', question: "Quel raccourci change le mode de Claude Code ?", options: [{ id: 'a', text: "Ctrl+M" }, { id: 'b', text: "Shift+Tab" }, { id: 'c', text: "Alt+Enter" }, { id: 'd', text: "Ctrl+Shift+P" }], correctAnswer: 'b', explanation: "Shift+Tab fait cycler entre les 4 modes de Claude Code. C'est le raccourci le plus utilisé au quotidien." },
      { id: 'q4', question: "À quoi sert la commande /clear ?", options: [{ id: 'a', text: "Supprimer tous les fichiers du projet" }, { id: 'b', text: "Vider le contexte de la conversation (Claude oublie les échanges précédents)" }, { id: 'c', text: "Effacer l'historique des commandes bash" }, { id: 'd', text: "Réinitialiser les paramètres de Claude" }], correctAnswer: 'b', explanation: "/clear vide la fenêtre de contexte de la conversation. Claude repart de zéro, ce qui peut améliorer les performances sur de longues sessions." },
      { id: 'q5', question: "Quel raccourci affiche le transcript détaillé de tous les outils appelés ?", options: [{ id: 'a', text: "Ctrl+T" }, { id: 'b', text: "Ctrl+S" }, { id: 'c', text: "Ctrl+O" }, { id: 'd', text: "Ctrl+L" }], correctAnswer: 'c', explanation: "Ctrl+O affiche le transcript verbose : chaque appel d'outil, chaque résultat, chaque décision du modèle. Utile pour déboguer ou comprendre ce que Claude a fait." },
    ],
    act: {
      title: "Pratiquer les raccourcis",
      duration: "10 minutes",
      objective: "Utiliser les 3 caractères spéciaux et les raccourcis clavier dans une vraie session.",
      steps: [
        { step: 1, instruction: "Dans un projet existant, lance Claude Code. Utilise @[nom-du-fichier] pour cibler un fichier et demande à Claude d'expliquer ce qu'il fait.", tip: "Exemple : @src/App.jsx explique-moi ce fichier" },
        { step: 2, instruction: "Lance ton serveur de développement sans quitter Claude en tapant !pnpm dev (ou !npm run dev)." },
        { step: 3, instruction: "Tape /usage pour voir ta consommation de tokens sur la session actuelle." },
        { step: 4, instruction: "Tape /clear pour vider le contexte, puis pose une nouvelle question. Vérifie que Claude ne se souvient plus de la conversation précédente." },
      ],
      validation: "Tu as utilisé @, !, et / dans la même session et observé leur effet. Tu sais maintenant rester dans Claude pour des opérations qui auraient nécessité de changer de fenêtre."
    }
  },

  {
    id: 5,
    title: "Le fichier CLAUDE.md — la mémoire de Claude",
    emoji: "📝",
    duration: "15 minutes",
    section: "Partie 2 — Installation et configuration",
    learn: [
      { type: 'paragraph', text: "Claude Code n'a pas de mémoire entre les conversations. À chaque nouvelle session, il repart de zéro. Le fichier CLAUDE.md résout ce problème : c'est un fichier texte lu automatiquement au début de chaque conversation." },
      { type: 'heading', text: "Les 3 niveaux de CLAUDE.md" },
      { type: 'list', items: ["~/.claude/CLAUDE.md — global, chargé dans tous tes projets. Mets-y tes préférences personnelles : langue, style de code, règles de sécurité.", "[projet]/CLAUDE.md — spécifique au projet. Commandes disponibles, stack technique, informations métier.", "[projet]/[dossier]/CLAUDE.md — règles d'un sous-dossier. Chargé quand Claude lit un fichier de ce dossier."] },
      { type: 'heading', text: "Générer automatiquement avec /init" },
      { type: 'paragraph', text: "La commande /init analyse ton projet et crée un CLAUDE.md avec les informations importantes : stack détectée, commandes disponibles (dev, build, test), structure des fichiers. C'est le point de départ idéal." },
      { type: 'callout', variant: 'warning', title: "La règle d'or", text: "Chaque ligne de CLAUDE.md est chargée dans le contexte à CHAQUE conversation. Une ligne inutile = tokens gaspillés à chaque session. Ne mets que ce qui est fondamentalement nécessaire." },
      { type: 'heading', text: "Ce qui va dans CLAUDE.md" },
      { type: 'comparison', left: { title: "À inclure", text: "Commandes de lancement (pnpm dev). Stack et conventions spécifiques. Règles métier critiques. Patterns à toujours suivre ou éviter." }, right: { title: "À ne pas inclure", text: "La documentation des librairies (utilisez Context7 pour ça). L'historique des changements (c'est dans git). Les choses évidentes que Claude sait déjà." } },
    ],
    verify: [
      { id: 'q1', question: "Quand est-ce que le fichier CLAUDE.md est lu par Claude ?", options: [{ id: 'a', text: "Seulement la première fois" }, { id: 'b', text: "Au début de chaque conversation" }, { id: 'c', text: "Quand tu le demandes explicitement" }, { id: 'd', text: "Une fois par jour" }], correctAnswer: 'b', explanation: "CLAUDE.md est automatiquement injecté dans le contexte au début de chaque conversation. C'est pourquoi son contenu doit être minimal et utile." },
      { id: 'q2', question: "Quelle commande génère automatiquement un CLAUDE.md pour ton projet ?", options: [{ id: 'a', text: "/create" }, { id: 'b', text: "/memory" }, { id: 'c', text: "/init" }, { id: 'd', text: "/setup" }], correctAnswer: 'c', explanation: "/init analyse la codebase, détecte la stack, les commandes disponibles et génère un CLAUDE.md adapté au projet." },
      { id: 'q3', question: "Où placer les préférences personnelles qui s'appliquent à tous les projets ?", options: [{ id: 'a', text: "Dans chaque projet/CLAUDE.md" }, { id: 'b', text: "Dans ~/.claude/CLAUDE.md" }, { id: 'c', text: "Dans settings.json" }, { id: 'd', text: "Dans un fichier .env" }], correctAnswer: 'b', explanation: "~/.claude/CLAUDE.md est le CLAUDE.md global. Il est chargé dans tous tes projets, contrairement au CLAUDE.md local qui est spécifique au projet." },
      { id: 'q4', question: "Pourquoi chaque ligne de CLAUDE.md coûte des tokens ?", options: [{ id: 'a', text: "Anthropic facture par ligne de configuration" }, { id: 'b', text: "Le fichier est injecté dans le contexte à chaque conversation" }, { id: 'c', text: "Claude le relit à chaque action" }, { id: 'd', text: "C'est un bug connu" }], correctAnswer: 'b', explanation: "CLAUDE.md est injecté dans le contexte au début de chaque conversation. Plus il est long, plus il occupe de la fenêtre de contexte — au détriment de la place disponible pour le vrai travail." },
      { id: 'q5', question: "Qu'est-ce qui NE devrait PAS être dans CLAUDE.md ?", options: [{ id: 'a', text: "La commande pour lancer le serveur de développement" }, { id: 'b', text: "Le stack technique du projet" }, { id: 'c', text: "La documentation complète de React" }, { id: 'd', text: "Les conventions de nommage spécifiques au projet" }], correctAnswer: 'c', explanation: "La documentation des librairies connues ne doit pas être dans CLAUDE.md — Claude la connaît déjà ou peut la chercher avec Context7. Ne mets que ce qui est spécifique à TON projet." },
    ],
    act: {
      title: "Créer ton CLAUDE.md de projet",
      duration: "15 minutes",
      objective: "Initialiser un CLAUDE.md utile pour un projet, en supprimant le superflu.",
      steps: [
        { step: 1, instruction: "Dans un projet existant, lance Claude Code et tape /init. Laisse Claude analyser le projet et créer le fichier CLAUDE.md." },
        { step: 2, instruction: "Ouvre le fichier CLAUDE.md généré dans VS Code. Lis chaque ligne et pose-toi la question : est-ce que Claude en aurait besoin à chaque conversation ?" },
        { step: 3, instruction: "Supprime les 3 lignes les moins utiles. Typiquement : des évidences, de la documentation générique, des informations déjà connues de Claude." },
        { step: 4, instruction: "Ajoute une règle de sécurité en bas du fichier : « N'utilise jamais rm -rf. Utilise trash à la place. »", tip: "Cette règle simple peut sauver des fichiers importants." },
      ],
      validation: "Ton CLAUDE.md existe, est plus court que la version générée automatiquement, et contient au moins une règle que tu as ajoutée toi-même."
    }
  },

  {
    id: 6,
    title: "Permissions et sécurité : la deny list",
    emoji: "🔒",
    duration: "10 minutes",
    section: "Partie 2 — Installation et configuration",
    learn: [
      { type: 'paragraph', text: "Le mode Bypass Permission est le plus productif — mais sans précautions, il peut être dangereux. La deny list te donne la liberté du bypass avec les garde-fous du mode standard." },
      { type: 'heading', text: "Le fichier settings.json" },
      { type: 'paragraph', text: "Les permissions se configurent dans ~/.claude/settings.json. Ce fichier s'applique globalement à tous tes projets." },
      { type: 'code', text: `{
  "defaultMode": "bypassPermissions",
  "permissions": {
    "deny": [
      "Bash(rm -rf:*)",
      "Bash(sudo:*)",
      "Bash(DROP TABLE:*)",
      "Bash(git push --force:*)"
    ]
  }
}` },
      { type: 'paragraph', text: "Avec cette configuration : Claude ne demande jamais de validation (bypassPermissions), mais les commandes dans la liste deny sont bloquées même en bypass." },
      { type: 'callout', variant: 'key', title: "Test de sécurité", text: "Pour vérifier que ta deny list fonctionne, tape dans Claude : !rm -rf /tmp/test. Tu dois voir une erreur de permission — pas une suppression." },
      { type: 'heading', text: "Règles complémentaires dans CLAUDE.md" },
      { type: 'paragraph', text: "La deny list bloque au niveau système. Mais tu peux aussi ajouter des règles comportementales dans CLAUDE.md : « N'utilise jamais rm -rf, utilise toujours trash ». C'est une deuxième couche de protection." },
      { type: 'list', title: "Commandes à toujours bloquer :", items: ["rm -rf — suppression irréversible de fichiers", "sudo — accès super-utilisateur", "DROP TABLE — suppression de base de données", "git push --force — écrasement de l'historique git"] },
    ],
    verify: [
      { id: 'q1', question: "Où se configure la deny list de Claude Code ?", options: [{ id: 'a', text: "Dans CLAUDE.md" }, { id: 'b', text: "Dans ~/.claude/settings.json" }, { id: 'c', text: "Dans .env" }, { id: 'd', text: "Via une commande /deny" }], correctAnswer: 'b', explanation: "Les permissions sont configurées dans ~/.claude/settings.json. Ce fichier est global et s'applique à tous les projets." },
      { id: 'q2', question: "En mode bypassPermissions avec une deny list, que se passe-t-il si Claude tente d'exécuter rm -rf ?", options: [{ id: 'a', text: "La commande s'exécute normalement" }, { id: 'b', text: "Claude te demande confirmation" }, { id: 'c', text: "Une erreur de permission est affichée — la commande est bloquée" }, { id: 'd', text: "Claude ignore la deny list en bypass" }], correctAnswer: 'c', explanation: "La deny list s'applique même en bypassPermissions. C'est exactement l'intérêt : liberté maximale avec des garde-fous sur les commandes dangereuses." },
      { id: 'q3', question: "Pourquoi bloquer sudo dans la deny list ?", options: [{ id: 'a', text: "sudo est inutile dans Claude Code" }, { id: 'b', text: "sudo donne des droits super-utilisateur qui pourraient affecter tout le système" }, { id: 'c', text: "sudo coûte plus de tokens" }, { id: 'd', text: "C'est une recommandation optionnelle" }], correctAnswer: 'b', explanation: "sudo permet d'exécuter des commandes avec les droits administrateur. Si Claude l'utilise accidentellement, il pourrait modifier des fichiers système critiques." },
      { id: 'q4', question: "Quelle est la différence entre une règle dans CLAUDE.md et une règle dans la deny list ?", options: [{ id: 'a', text: "Elles sont identiques" }, { id: 'b', text: "CLAUDE.md donne des instructions comportementales, la deny list bloque au niveau système" }, { id: 'c', text: "La deny list s'applique seulement en mode Standard" }, { id: 'd', text: "CLAUDE.md est plus sécurisé" }], correctAnswer: 'b', explanation: "La deny list est une barrière système — Claude ne peut physiquement pas exécuter ces commandes. CLAUDE.md est une instruction comportementale que Claude suit par convention." },
      { id: 'q5', question: "Que se passe-t-il si tu tapes !rm -rf /tmp/test avec une deny list configurée ?", options: [{ id: 'a', text: "Le dossier /tmp/test est supprimé" }, { id: 'b', text: "Claude te demande confirmation" }, { id: 'c', text: "Une erreur de permission apparaît" }, { id: 'd', text: "Claude reformule la commande différemment" }], correctAnswer: 'c', explanation: "La deny list bloque la commande avant son exécution. Tu vois une erreur de permission — c'est le comportement attendu et souhaité." },
    ],
    act: {
      title: "Configurer settings.json",
      duration: "10 minutes",
      objective: "Créer son fichier settings.json avec bypassPermissions et une deny list.",
      steps: [
        { step: 1, instruction: "Crée le fichier ~/.claude/settings.json avec le contenu du chapitre (bypassPermissions + deny list pour rm -rf, sudo, DROP TABLE).", tip: "Tu peux demander à Claude de créer ce fichier pour toi : « Crée mon settings.json dans ~/.claude/ avec bypassPermissions et une deny list sécurisée. »" },
        { step: 2, instruction: "Redémarre Claude Code pour que les paramètres soient pris en compte." },
        { step: 3, instruction: "Teste ta deny list en tapant : !rm -rf /tmp/test-securite. Tu dois voir une erreur, pas une exécution." },
        { step: 4, instruction: "Vérifie que tu es bien en bypass en demandant à Claude de créer un fichier — il doit le faire sans te demander confirmation." },
      ],
      validation: "Claude travaille en mode bypass (crée des fichiers sans demander), mais rm -rf est bloqué par la deny list."
    }
  },

  {
    id: 7,
    title: "Tarification : tokens et plans",
    emoji: "💰",
    duration: "10 minutes",
    section: "Partie 2 — Installation et configuration",
    learn: [
      { type: 'paragraph', text: "Comprendre la tarification évite les mauvaises surprises et t'aide à choisir le bon plan. Claude Code consomme des tokens — l'unité de mesure du texte traité." },
      { type: 'heading', text: "Comment fonctionnent les tokens" },
      { type: 'paragraph', text: "Un token représente environ 4 caractères. Chaque conversation consomme des tokens en input (ce que tu envoies + le contexte) et en output (la réponse de Claude). Les longs contextes (CLAUDE.md volumineux, nombreux fichiers lus) coûtent plus cher." },
      { type: 'heading', text: "Les plans disponibles" },
      { type: 'list', items: ["Claude Pro — 20$/mois. ~160$ d'API équivalente. Idéal pour débuter ou pour un usage personnel modéré.", "Claude Max 5x — 100$/mois. ~800$ d'API équivalente. Pour un usage professionnel quotidien.", "Claude Max 20x — 200$/mois. ~3 200$ d'API équivalente. Le meilleur rapport valeur/prix pour les power users — 2x plus cher que le 5x mais 4x plus d'usage."] },
      { type: 'heading', text: "Les sessions de 5 heures" },
      { type: 'paragraph', text: "Claude Code fonctionne par sessions de 5 heures. Dans chaque session, tu as un pourcentage d'usage disponible. Les sessions se réinitialisent automatiquement — jusqu'à ~4,5 sessions par jour. Il y a aussi une limite hebdomadaire, plus large et difficile à atteindre." },
      { type: 'callout', variant: 'note', title: "Quelle progression adopter", text: "Commence à 20$/mois. Quand tu attiens régulièrement les limites de session, passe à 100$. Si tu travailles de manière intensive toute la journée, le 200$ est plus rentable que le 100$." },
    ],
    verify: [
      { id: 'q1', question: "Combien d'heures dure une session Claude Code ?", options: [{ id: 'a', text: "1 heure" }, { id: 'b', text: "5 heures" }, { id: 'c', text: "24 heures" }, { id: 'd', text: "1 semaine" }], correctAnswer: 'b', explanation: "Claude Code fonctionne par sessions de 5 heures. Tu peux avoir jusqu'à ~4,5 sessions par jour avant d'atteindre la limite quotidienne." },
      { id: 'q2', question: "Quel plan offre le meilleur rapport valeur/prix pour un usage très intensif ?", options: [{ id: 'a', text: "Claude Pro à 20$" }, { id: 'b', text: "Claude Max 5x à 100$" }, { id: 'c', text: "Claude Max 20x à 200$" }, { id: 'd', text: "L'API à la consommation" }], correctAnswer: 'c', explanation: "Le Max 20x coûte 2x plus cher que le 5x mais offre 4x plus d'usage (~3 200$ d'API équivalente). Pour un usage intensif, c'est le rapport valeur/prix le plus avantageux." },
      { id: 'q3', question: "Qu'est-ce qui fait monter la consommation de tokens le plus vite ?", options: [{ id: 'a', text: "Poser des questions courtes" }, { id: 'b', text: "Un CLAUDE.md volumineux et de nombreux fichiers lus" }, { id: 'c', text: "Utiliser le mode Plan" }, { id: 'd', text: "Changer souvent de modèle" }], correctAnswer: 'b', explanation: "Les tokens input (contexte envoyé au modèle) coûtent autant que les tokens output. Un CLAUDE.md long + de nombreux fichiers lus = contexte massif multiplié par chaque action de la boucle agentique." },
      { id: 'q4', question: "Où voir sa consommation de tokens en temps réel ?", options: [{ id: 'a', text: "Dans settings.json" }, { id: 'b', text: "Via la commande /usage dans Claude Code" }, { id: 'c', text: "Par email chaque semaine" }, { id: 'd', text: "Seulement sur le site Anthropic" }], correctAnswer: 'b', explanation: "/usage affiche le pourcentage d'usage de la session actuelle et de la semaine. Claude Code montre aussi un indicateur en temps réel dans l'interface." },
      { id: 'q5', question: "Que se passe-t-il quand tu atteins la limite de session ?", options: [{ id: 'a', text: "Claude Code se désinstalle" }, { id: 'b', text: "Tu dois attendre la semaine suivante" }, { id: 'c', text: "La session se réinitialise après un délai (~1h) ou tu attends la prochaine session de 5h" }, { id: 'd', text: "Claude passe automatiquement à un modèle moins puissant" }], correctAnswer: 'c', explanation: "Les sessions de 5h se renouvellent automatiquement. Si tu atteins la limite de session, il suffit d'attendre environ 1h pour que la prochaine session commence." },
    ],
    act: {
      title: "Vérifier sa consommation",
      duration: "5 minutes",
      objective: "Consulter sa consommation de tokens et comprendre où en est son usage.",
      steps: [
        { step: 1, instruction: "Lance Claude Code et tape /usage. Lis le pourcentage de session utilisé et le pourcentage hebdomadaire." },
        { step: 2, instruction: "Va sur claude.ai → Settings → Usage pour voir un historique détaillé de ta consommation." },
        { step: 3, instruction: "Ouvre une conversation test et demande à Claude de lire un gros fichier de ton projet. Retape /usage ensuite et compare — tu vois l'impact d'une seule action." },
      ],
      validation: "Tu sais lire ta consommation en temps réel et tu as observé comment une action augmente l'usage de tokens."
    }
  },

  // ─── PARTIE 3 — SKILLS, AGENTS ET MCP ────────────────────────────────────

  {
    id: 8,
    title: "Les skills : des recettes réutilisables",
    emoji: "🧩",
    duration: "15 minutes",
    section: "Partie 3 — Skills, agents et MCP",
    learn: [
      { type: 'paragraph', text: "Les skills sont l'une des fonctionnalités les plus puissantes de Claude Code. Un skill, c'est un prompt structuré stocké dans un fichier Markdown, qu'on appelle avec /nom-du-skill." },
      { type: 'heading', text: "La métaphore du livre de cuisine" },
      { type: 'comparison', left: { title: "Sans skills", text: "Claude improvise à chaque fois. Résultats aléatoires selon la formulation du prompt. Impossible de reproduire exactement un bon résultat." }, right: { title: "Avec skills", text: "Claude suit une recette structurée. Résultats cohérents et reproductibles. Tu construis une librairie de workflows qui s'améliorent avec le temps." } },
      { type: 'heading', text: "Structure d'un skill" },
      { type: 'paragraph', text: "Un skill est un dossier avec un fichier skill.md comme point d'entrée. Pour les skills complexes, on ajoute des fichiers de référence dans le même dossier. Le fichier skill.md décrit les étapes que Claude doit suivre." },
      { type: 'code', text: `.claude/skills/github-init/
└── skill.md  ← point d'entrée, Claude lit ce fichier quand tu tapes /github-init` },
      { type: 'heading', text: "Trouver des skills existants" },
      { type: 'paragraph', text: "Le site skill.sh propose une collection de skills prêts à l'emploi. Tu peux les installer avec la commande npx skill add. Les skills s'installent soit en global (disponibles dans tous les projets) soit en local (pour un projet spécifique)." },
      { type: 'callout', variant: 'note', title: "Skills vs commandes", text: "Dans les anciennes versions de Claude Code, on parlait de « commandes ». Dans les versions récentes, le terme officiel est « skills ». Ce sont exactement la même chose." },
    ],
    verify: [
      { id: 'q1', question: "Comment appelle-t-on un skill dans Claude Code ?", options: [{ id: 'a', text: "En tapant le nom du fichier" }, { id: 'b', text: "Avec /nom-du-skill" }, { id: 'c', text: "Avec @nom-du-skill" }, { id: 'd', text: "Via un menu graphique" }], correctAnswer: 'b', explanation: "Les skills s'appellent avec /. Claude cherche un fichier skill.md dans le dossier correspondant et l'exécute comme un workflow." },
      { id: 'q2', question: "Qu'est-ce qu'un skill concrètement ?", options: [{ id: 'a', text: "Un plugin à installer via npm" }, { id: 'b', text: "Un fichier Markdown avec des instructions structurées pour Claude" }, { id: 'c', text: "Une extension de VS Code" }, { id: 'd', text: "Une configuration dans settings.json" }], correctAnswer: 'b', explanation: "Un skill est simplement un fichier Markdown avec un workflow structuré. Claude le lit et suit les étapes. Pas de code — juste des instructions en langage naturel." },
      { id: 'q3', question: "Où installer un skill pour qu'il soit disponible dans tous les projets ?", options: [{ id: 'a', text: "Dans le dossier du projet actuel" }, { id: 'b', text: "En global via npx skill add --scope global" }, { id: 'c', text: "Dans CLAUDE.md" }, { id: 'd', text: "Dans settings.json" }], correctAnswer: 'b', explanation: "En ajoutant --scope global (ou --scope user), le skill est installé dans ~/.claude/skills/ et disponible dans tous tes projets." },
      { id: 'q4', question: "Quel est l'avantage principal des skills par rapport aux prompts libres ?", options: [{ id: 'a', text: "Ils consomment moins de tokens" }, { id: 'b', text: "Ils donnent des résultats cohérents et reproductibles" }, { id: 'c', text: "Ils sont plus rapides à exécuter" }, { id: 'd', text: "Claude ne fait pas d'erreurs avec les skills" }], correctAnswer: 'b', explanation: "Avec un skill, Claude suit toujours le même workflow. Les résultats sont prévisibles et cohérents — contrairement aux prompts libres qui dépendent de la formulation." },
      { id: 'q5', question: "Où trouver des skills prêts à l'emploi ?", options: [{ id: 'a', text: "Sur le site d'Anthropic" }, { id: 'b', text: "Sur skill.sh" }, { id: 'c', text: "Sur GitHub uniquement" }, { id: 'd', text: "Dans VS Code Marketplace" }], correctAnswer: 'b', explanation: "skill.sh est le site dédié aux skills Claude Code. Tu y trouves une collection de skills créés par la communauté, installables en une commande." },
    ],
    act: {
      title: "Installer et utiliser un skill",
      duration: "10 minutes",
      objective: "Installer un skill depuis skill.sh et l'utiliser dans un projet.",
      steps: [
        { step: 1, instruction: "Va sur skill.sh et explore les skills disponibles. Choisis un skill qui t'intéresse (par exemple frontend-design ou github-init)." },
        { step: 2, instruction: "Installe le skill en global avec la commande indiquée sur le site. Exemple : npx skill add anthropic skill github-init", tip: "Choisis 'Claude Code' comme outil cible et 'global' comme scope." },
        { step: 3, instruction: "Dans Claude Code, tape /github-init (ou le nom du skill que tu as installé) et observe Claude suivre le workflow structuré." },
      ],
      validation: "Un skill est installé et tu l'as appelé avec /. Claude a suivi les étapes du workflow au lieu d'improviser."
    }
  },

  {
    id: 9,
    title: "Créer son skill avec /skill-creator",
    emoji: "🛠️",
    duration: "15 minutes",
    section: "Partie 3 — Skills, agents et MCP",
    learn: [
      { type: 'paragraph', text: "Tu n'as pas à écrire tes skills de zéro. /skill-creator est un skill dédié à la création de skills — Claude te pose des questions et génère un skill professionnel en quelques minutes." },
      { type: 'heading', text: "Installer skill-creator" },
      { type: 'code', text: "npx skill add anthropic skill skill-creator" },
      { type: 'heading', text: "Créer un skill en pratique" },
      { type: 'paragraph', text: "Une fois installé, tape /skill-creator et décris ce que tu veux. Exemple : « Crée un skill /debug-helper. Il prend un fichier en paramètre, je lui envoie une erreur, il brainstorme 3 solutions, me demande la meilleure et corrige le problème. »" },
      { type: 'paragraph', text: "Claude va te poser des questions de précision, puis générer le fichier skill.md avec la structure complète." },
      { type: 'callout', variant: 'key', title: "La règle d'or des skills", text: "Ne crée jamais un skill manuellement. Utilise /skill-creator — la qualité du workflow généré sera bien meilleure que ce que tu écrirais toi-même, parce que Claude connaît les meilleures pratiques de prompting." },
      { type: 'heading', text: "Exemples de skills utiles à créer" },
      { type: 'list', items: ["/fix-typos — corrige les fautes dans un fichier", "/changelog-update — met à jour CHANGELOG.md après chaque modification", "/code-review — review le code avant de pousser sur git", "/daily-standup — génère un résumé des commits de la journée"] },
      { type: 'heading', text: "Structure du fichier skill.md généré" },
      { type: 'paragraph', text: "Le skill généré contient : une description de l'objectif, les paramètres acceptés, les étapes séquentielles que Claude doit suivre, et les conditions de sortie. Chaque étape est une instruction claire en langage naturel." },
    ],
    verify: [
      { id: 'q1', question: "Pourquoi utiliser /skill-creator plutôt d'écrire un skill manuellement ?", options: [{ id: 'a', text: "C'est obligatoire — Claude refuse les skills manuels" }, { id: 'b', text: "Claude connaît les meilleures pratiques de prompting et génère un workflow de meilleure qualité" }, { id: 'c', text: "Les skills manuels ne fonctionnent pas" }, { id: 'd', text: "C'est plus rapide uniquement" }], correctAnswer: 'b', explanation: "Claude a été entraîné sur d'énormes quantités de prompts. /skill-creator génère des workflows qui suivent les meilleures pratiques de structuration, bien mieux qu'une rédaction improvisée." },
      { id: 'q2', question: "Comment installer /skill-creator ?", options: [{ id: 'a', text: "Il est intégré par défaut" }, { id: 'b', text: "npx skill add anthropic skill skill-creator" }, { id: 'c', text: "Via /install skill-creator" }, { id: 'd', text: "En créant manuellement le fichier" }], correctAnswer: 'b', explanation: "skill-creator est un skill comme les autres, distribué sur skill.sh. Il faut l'installer avant de pouvoir l'utiliser." },
      { id: 'q3', question: "Que contient typiquement un fichier skill.md généré par /skill-creator ?", options: [{ id: 'a', text: "Du code JavaScript" }, { id: 'b', text: "Des instructions en langage naturel organisées en étapes séquentielles" }, { id: 'c', text: "Un fichier de configuration JSON" }, { id: 'd', text: "Des regex pour filtrer les réponses" }], correctAnswer: 'b', explanation: "Un skill.md est du Markdown avec des instructions en langage naturel. Il décrit l'objectif, les paramètres, et les étapes que Claude doit suivre." },
      { id: 'q4', question: "Quel skill serait le plus utile pour un développeur qui pousse du code régulièrement sur git ?", options: [{ id: 'a', text: "/install-node" }, { id: 'b', text: "/code-review — pour vérifier le code avant de pousser" }, { id: 'c', text: "/setup-tmux" }, { id: 'd', text: "/create-project" }], correctAnswer: 'b', explanation: "Un skill /code-review automatise la vérification du code avant chaque push : style, bugs potentiels, sécurité. C'est une tâche répétitive idéale pour un skill." },
      { id: 'q5', question: "Peut-on passer des paramètres à un skill ?", options: [{ id: 'a', text: "Non — les skills s'exécutent sans paramètres" }, { id: 'b', text: "Oui — on les précise après le nom du skill : /debug-helper @fichier.ts" }, { id: 'c', text: "Seulement avec des skills payants" }, { id: 'd', text: "Uniquement via le fichier CLAUDE.md" }], correctAnswer: 'b', explanation: "Les skills acceptent des paramètres comme n'importe quelle commande. /debug-helper @src/app.ts 'TypeError: undefined' envoie le fichier et l'erreur au skill." },
    ],
    act: {
      title: "Créer ton premier skill personnalisé",
      duration: "15 minutes",
      objective: "Utiliser /skill-creator pour créer un skill adapté à ton usage quotidien.",
      steps: [
        { step: 1, instruction: "Installe skill-creator : npx skill add anthropic skill skill-creator" },
        { step: 2, instruction: "Lance /skill-creator et décris ce skill : « Crée un skill /summarize-file. Il prend un fichier en paramètre, le lit, et produit un résumé en 5 points de ce que le fichier fait. »" },
        { step: 3, instruction: "Réponds aux questions de Claude pour affiner le skill. Valide le résultat final." },
        { step: 4, instruction: "Teste ton nouveau skill : /summarize-file @[un-fichier-de-ton-projet]", tip: "Si le résultat ne correspond pas à ce que tu voulais, dis à /skill-creator ce qui manque — il améliore le skill." },
      ],
      validation: "Ton skill /summarize-file existe dans .claude/skills/, tu l'as appelé et il a produit un résumé structuré du fichier que tu lui as donné."
    }
  },

  {
    id: 10,
    title: "Les MCP : connecter Claude à des services externes",
    emoji: "🔌",
    duration: "15 minutes",
    section: "Partie 3 — Skills, agents et MCP",
    learn: [
      { type: 'paragraph', text: "Les MCP (Model Context Protocol) sont des plugins qui ajoutent de nouveaux outils à Claude Code. Par défaut, Claude a bash, read, edit, web_fetch, web_search. Les MCP étendent ces capacités." },
      { type: 'heading', text: "Les 2 MCP recommandés" },
      { type: 'paragraph', text: "Melvynx recommande de ne pas installer plus de 2 MCP. Voici les 2 qui valent vraiment la peine :" },
      { type: 'list', items: ["Context7 — fournit la documentation à jour de n'importe quelle librairie. Gratuit. Indispensable quand tu travailles avec des frameworks récents que Claude ne connaît pas bien.", "Exa — moteur de recherche web ultra-optimisé pour l'IA. Payant mais excellent pour les recherches techniques."] },
      { type: 'heading', text: "Installer Context7" },
      { type: 'code', text: "claude mcp add context7 --scope user -- npx -y @context7/mcp-server" },
      { type: 'paragraph', text: "Après installation, utilise /mcp dans Claude Code pour vérifier que Context7 apparaît dans la liste." },
      { type: 'callout', variant: 'warning', title: "Attention à la saturation", text: "Chaque MCP ajoute une description de ses outils dans le contexte. Trop de MCP = moins de place pour le vrai travail. Utilise /context pour voir combien chaque MCP occupe. Désactive les MCP inutiles." },
      { type: 'heading', text: "La feature mcpToolSearch" },
      { type: 'paragraph', text: "Si tu as quand même plusieurs MCP, active mcpToolSearch dans tes settings. Cette feature compresse automatiquement la définition des MCP quand ils dépassent 10% de l'espace de contexte." },
    ],
    verify: [
      { id: 'q1', question: "À quoi sert le MCP Context7 ?", options: [{ id: 'a', text: "À gérer les versions de Node.js" }, { id: 'b', text: "À fournir la documentation à jour des librairies directement à Claude" }, { id: 'c', text: "À créer des composants React automatiquement" }, { id: 'd', text: "À synchroniser des fichiers avec le cloud" }], correctAnswer: 'b', explanation: "Context7 donne accès à la documentation officielle et à jour de milliers de librairies. Claude peut chercher des infos précises au lieu de se baser sur ses données d'entraînement potentiellement obsolètes." },
      { id: 'q2', question: "Pourquoi ne pas installer trop de MCP ?", options: [{ id: 'a', text: "Claude Code plante avec trop de MCP" }, { id: 'b', text: "Chaque MCP occupe du contexte, réduisant la place pour le travail réel" }, { id: 'c', text: "Les MCP coûtent cher" }, { id: 'd', text: "Il y a une limite de 2 MCP dans les paramètres" }], correctAnswer: 'b', explanation: "Chaque MCP ajoute la description de ses outils dans le contexte à chaque conversation. 10 MCP inutilisés peuvent gaspiller 20% du contexte disponible." },
      { id: 'q3', question: "Comment vérifier quels MCP sont actifs dans Claude Code ?", options: [{ id: 'a', text: "En lisant settings.json" }, { id: 'b', text: "Avec la commande /mcp" }, { id: 'c', text: "Via claude --list-mcp" }, { id: 'd', text: "Dans VS Code Extensions" }], correctAnswer: 'b', explanation: "/mcp liste tous les MCP actifs avec leur statut. C'est le moyen le plus rapide de vérifier qu'un MCP est bien installé et fonctionnel." },
      { id: 'q4', question: "Quelle commande installe Context7 en scope user ?", options: [{ id: 'a', text: "npm install @context7/mcp" }, { id: 'b', text: "claude mcp add context7 --scope user -- npx -y @context7/mcp-server" }, { id: 'c', text: "/install context7" }, { id: 'd', text: "npx skill add context7" }], correctAnswer: 'b', explanation: "La commande claude mcp add ajoute un MCP à la configuration de Claude Code. --scope user l'installe globalement pour tous les projets." },
      { id: 'q5', question: "À quoi sert la feature mcpToolSearch ?", options: [{ id: 'a', text: "À chercher des MCP sur internet" }, { id: 'b', text: "À compresser la définition des MCP dans le contexte quand ils prennent trop de place" }, { id: 'c', text: "À désactiver les MCP inutilisés" }, { id: 'd', text: "À mettre à jour les MCP automatiquement" }], correctAnswer: 'b', explanation: "mcpToolSearch optimise automatiquement la définition des MCP dans le contexte quand ceux-ci dépassent 10% de l'espace disponible. Utile si tu as plusieurs MCP." },
    ],
    act: {
      title: "Installer Context7 et tester",
      duration: "10 minutes",
      objective: "Installer le MCP Context7 et l'utiliser pour obtenir de la documentation précise.",
      steps: [
        { step: 1, instruction: "Va sur context7.com, connecte-toi avec GitHub, et génère ta clé API." },
        { step: 2, instruction: "Dans un terminal, exécute : claude mcp add context7 --scope user -- npx -y @context7/mcp-server" },
        { step: 3, instruction: "Redémarre Claude Code et tape /mcp pour vérifier que Context7 apparaît dans la liste." },
        { step: 4, instruction: "Teste Context7 en demandant à Claude : « Comment créer un composant avec useEffect dans React 18 ? Utilise Context7 pour la doc officielle. »", tip: "Compare la réponse avec ce que tu aurais eu sans Context7 — elle sera plus précise et à jour." },
      ],
      validation: "Context7 est actif (/mcp le confirme) et Claude a fourni une réponse basée sur la documentation officielle à jour."
    }
  },

  {
    id: 11,
    title: "Les subagents : déléguer sans saturer",
    emoji: "🤖",
    duration: "15 minutes",
    section: "Partie 3 — Skills, agents et MCP",
    learn: [
      { type: 'paragraph', text: "Les subagents sont une des fonctionnalités les plus puissantes de Claude Code. Ils permettent de déléguer des tâches volumineuses à des agents séparés, sans encombrer le contexte principal." },
      { type: 'heading', text: "Le problème de la saturation" },
      { type: 'paragraph', text: "Claude Code a une fenêtre de contexte de 200 000 tokens. Chaque recherche web peut rapporter 28 000 tokens. Trois recherches = 84 000 tokens — presque la moitié du contexte utilisé pour des informations brutes, pas pour le travail réel." },
      { type: 'highlight', text: "Un subagent fait la recherche, lit 120 000 mots, et te retourne seulement les 1 500 mots pertinents. Tu économises 98% du contexte." },
      { type: 'heading', text: "Créer un agent avec /agent" },
      { type: 'paragraph', text: "Tape /agent → « Create new agent » dans Claude Code. Configure : un nom, une description précise (utilisée par Claude pour décider quand l'appeler automatiquement), les outils autorisés, et le modèle (Haiku pour les tâches simples, Sonnet pour les tâches complexes)." },
      { type: 'heading', text: "Mes 3 agents recommandés" },
      { type: 'list', items: ["Agent Web Search — outils : web_search, web_fetch. Description : « Use when you need to find information quickly. Return only relevant excerpts. »", "Agent Explore — outils : read, grep, search. Pour explorer la codebase efficacement.", "Agent Doc — utilise Context7. Pour chercher la documentation d'une librairie précise."] },
      { type: 'callout', variant: 'key', title: "La puissance du parallélisme", text: "Claude peut lancer plusieurs subagents simultanément. « Corrige la grammaire de tous les fichiers » lance autant d'agents que de fichiers — tous en parallèle. 13 fichiers corrigés en même temps." },
    ],
    verify: [
      { id: 'q1', question: "Pourquoi les subagents évitent-ils la saturation du contexte ?", options: [{ id: 'a', text: "Ils utilisent un modèle différent" }, { id: 'b', text: "Ils font le travail brut et retournent seulement le résumé pertinent" }, { id: 'c', text: "Ils ne lisent pas les fichiers" }, { id: 'd', text: "Ils compressent les données automatiquement" }], correctAnswer: 'b', explanation: "Le subagent traite toute l'information brute dans son propre contexte isolé et retourne uniquement ce qui est utile. Le contexte principal reçoit un résumé compact, pas les données brutes." },
      { id: 'q2', question: "Combien une recherche web peut-elle consommer de tokens sans subagent ?", options: [{ id: 'a', text: "Environ 100 tokens" }, { id: 'b', text: "Environ 1 000 tokens" }, { id: 'c', text: "Jusqu'à 28 000 tokens" }, { id: 'd', text: "Exactement 5 000 tokens" }], correctAnswer: 'c', explanation: "Une page web peut contenir énormément de texte. Sans subagent, tout ce contenu est injecté dans le contexte principal — jusqu'à 28 000 tokens pour une seule page." },
      { id: 'q3', question: "Quelle information est la plus importante lors de la création d'un agent ?", options: [{ id: 'a', text: "Le nom de l'agent" }, { id: 'b', text: "La description — utilisée par Claude pour décider quand appeler l'agent automatiquement" }, { id: 'c', text: "Le modèle utilisé" }, { id: 'd', text: "Les outils autorisés" }], correctAnswer: 'b', explanation: "La description est lue par Claude pour décider s'il doit déléguer une tâche à cet agent. Une description précise = une délégation automatique au bon moment." },
      { id: 'q4', question: "Quel modèle choisir pour un agent qui fait des recherches web simples ?", options: [{ id: 'a', text: "Claude Opus — le plus puissant" }, { id: 'b', text: "Claude Haiku — plus rapide et moins coûteux pour les tâches simples" }, { id: 'c', text: "Toujours le même modèle que le contexte principal" }, { id: 'd', text: "GPT-4 via l'API" }], correctAnswer: 'b', explanation: "Pour des tâches simples comme faire une recherche et résumer, Haiku est amplement suffisant et beaucoup moins coûteux qu'Opus. Réserve les gros modèles aux tâches complexes." },
      { id: 'q5', question: "Comment Claude peut-il utiliser plusieurs subagents simultanément ?", options: [{ id: 'a', text: "Ce n'est pas possible — ils s'exécutent toujours en séquence" }, { id: 'b', text: "En lançant des tâches sur des fichiers ou zones distinctes en parallèle" }, { id: 'c', text: "En activant le mode Teams" }, { id: 'd', text: "En installant un plugin spécifique" }], correctAnswer: 'b', explanation: "Claude peut orchestrer plusieurs subagents simultanément quand les tâches sont indépendantes. Corriger la grammaire de 13 fichiers différents → 13 agents en parallèle." },
    ],
    act: {
      title: "Créer un agent Web Search",
      duration: "15 minutes",
      objective: "Créer un subagent spécialisé dans la recherche web et l'utiliser pour une vraie recherche.",
      steps: [
        { step: 1, instruction: "Dans Claude Code, tape /agent → Create new agent. Nomme-le web-search." },
        { step: 2, instruction: "Configure la description : « Use when you need to find information quickly on the web. Search, read the relevant pages, and return only a concise summary of what was found. Stop as soon as you have the answer. »" },
        { step: 3, instruction: "Autorise les outils web_search et web_fetch. Choisis Haiku comme modèle." },
        { step: 4, instruction: "Teste l'agent en demandant à Claude : « Utilise l'agent web-search pour trouver la dernière version de React et ses nouveautés principales. »" },
      ],
      validation: "L'agent web-search existe, tu l'as utilisé et reçu un résumé compact d'une recherche — sans que le contexte principal soit encombré par les pages web brutes."
    }
  },

  // ─── PARTIE 4 — ÉCRIRE DE MEILLEURS PROMPTS ──────────────────────────────

  {
    id: 12,
    title: "L'art du prompt efficace",
    emoji: "✍️",
    duration: "15 minutes",
    section: "Partie 4 — Écrire de meilleurs prompts",
    learn: [
      { type: 'paragraph', text: "La différence entre un utilisateur moyen et un utilisateur expert de Claude Code tient souvent à une seule chose : la qualité de ses prompts. Un bon prompt ne signifie pas un prompt long — il signifie un prompt précis." },
      { type: 'heading', text: "Les 3 ingrédients d'un bon prompt" },
      { type: 'list', items: [
        "Le contexte — ce que Claude doit savoir avant d'agir. Quel est le fichier concerné ? Quel est le comportement actuel ? Quel est le comportement attendu ?",
        "L'action — ce que tu veux que Claude fasse. Un verbe précis : ajoute, supprime, remplace, refactore, corrige, génère.",
        "Les contraintes — ce que Claude ne doit PAS faire. Aussi important que l'action elle-même.",
      ]},
      { type: 'heading', text: "La formule en une ligne" },
      { type: 'highlight', text: "Dans [fichier], [action] pour que [résultat], sans [contrainte]." },
      { type: 'paragraph', text: "Exemple : « Dans src/App.tsx, ajoute un état de chargement au bouton de soumission pour que l'utilisateur voit un spinner pendant la requête, sans modifier la logique existante du formulaire. »" },
      { type: 'comparison', left: { title: "❌ Prompt vague", text: "Améliore mon code.\n\nClaude ne sait pas quoi améliorer, dans quel fichier, selon quels critères. Il va improviser une refactorisation que tu n'avais peut-être pas demandée." }, right: { title: "✓ Prompt précis", text: "Dans src/api.ts, remplace les callbacks par des async/await pour améliorer la lisibilité, sans changer la logique de gestion d'erreurs.\n\nClaude sait exactement quoi faire — et quoi ne pas toucher." } },
      { type: 'heading', text: "Quand utiliser @" },
      { type: 'paragraph', text: "Si ton prompt mentionne un fichier spécifique, utilise @ pour l'inclure directement. Claude obtient le contenu exact du fichier dans son contexte — plus besoin qu'il l'explore lui-même. Ça économise un aller-retour dans la boucle agentique." },
      { type: 'callout', variant: 'key', title: "La règle des 5 secondes", text: "Lis ton prompt à voix haute. Si en 5 secondes tu ne sais pas exactement ce que Claude va faire, reformule. Un prompt clair pour toi sera clair pour Claude." },
    ],
    verify: [
      { id: 'q1', question: "Quels sont les 3 ingrédients d'un bon prompt pour Claude Code ?", options: [{ id: 'a', text: "Longueur, formalité, politesse" }, { id: 'b', text: "Contexte, action, contraintes" }, { id: 'c', text: "Fichier, commentaire, résultat" }, { id: 'd', text: "Objectif, délai, budget" }], correctAnswer: 'b', explanation: "Contexte (ce que Claude doit savoir), action (ce qu'il doit faire) et contraintes (ce qu'il ne doit pas toucher) sont les 3 éléments qui rendent un prompt efficace et prévisible." },
      { id: 'q2', question: "Qu'est-ce qui différencie un prompt vague d'un prompt précis ?", options: [{ id: 'a', text: "Le nombre de mots" }, { id: 'b', text: "L'utilisation de @ pour cibler des fichiers" }, { id: 'c', text: "La précision de l'action et des contraintes" }, { id: 'd', text: "Le niveau de politesse" }], correctAnswer: 'c', explanation: "Un prompt précis dit exactement QUOI faire, dans QUEL fichier, et ce qu'il NE faut PAS toucher. La longueur est secondaire — la précision est primordiale." },
      { id: 'q3', question: "Pourquoi inclure des contraintes dans un prompt (sans modifier X) ?", options: [{ id: 'a', text: "Pour ralentir Claude" }, { id: 'b', text: "Pour éviter que Claude ne refactore du code que tu ne voulais pas toucher" }, { id: 'c', text: "C'est une exigence technique de Claude Code" }, { id: 'd', text: "Pour économiser des tokens" }], correctAnswer: 'b', explanation: "Sans contraintes, Claude peut interpréter 'améliore ce code' de manière très large. Les contraintes bornent l'action et évitent les modifications non souhaitées." },
      { id: 'q4', question: "Quelle formule résume un bon prompt ?", options: [{ id: 'a', text: "Explique ce que tu veux le plus clairement possible en plusieurs paragraphes" }, { id: 'b', text: "Dans [fichier], [action] pour que [résultat], sans [contrainte]" }, { id: 'c', text: "S'il te plaît, pourrais-tu [action] ?" }, { id: 'd', text: "Fais [action] dans tous les fichiers du projet" }], correctAnswer: 'b', explanation: "Cette formule contient les 4 éléments essentiels : l'emplacement précis, l'action attendue, le résultat visé, et la limite de l'intervention." },
      { id: 'q5', question: "La règle des 5 secondes dit : si tu ne sais pas en 5 secondes ce que Claude va faire…", options: [{ id: 'a', text: "Envoie le prompt quand même, Claude s'en sortira" }, { id: 'b', text: "Ajoute plus de détails techniques" }, { id: 'c', text: "Reformule le prompt — il n'est pas assez précis" }, { id: 'd', text: "Divise-le en plusieurs prompts" }], correctAnswer: 'c', explanation: "Si toi-même tu ne sais pas exactement ce que Claude va faire, c'est que le prompt est ambigu. Un prompt clair pour toi sera clair pour Claude." },
    ],
    act: {
      title: "Réécrire 3 prompts vagues",
      duration: "10 minutes",
      objective: "Transformer des prompts imprécis en prompts précis qui donnent des résultats prévisibles.",
      steps: [
        { step: 1, instruction: "Prends ces 3 prompts vagues et réécris-les en suivant la formule : « Dans [fichier], [action] pour que [résultat], sans [contrainte]. »\n\nPrompt 1 : « Améliore le code. »\nPrompt 2 : « Ajoute des commentaires. »\nPrompt 3 : « Rends le bouton plus beau. »" },
        { step: 2, instruction: "Pour chaque reformulation, applique la règle des 5 secondes : lis le prompt à voix haute. Est-ce que l'action est immédiatement claire ?" },
        { step: 3, instruction: "Utilise un de tes prompts reformulés dans Claude Code sur un vrai fichier. Compare le résultat avec ce que tu aurais eu avec le prompt vague d'origine.", tip: "Souviens-toi d'utiliser @ pour inclure le fichier dans le contexte." },
      ],
      validation: "Tu as reformulé les 3 prompts avec contexte + action + résultat + contrainte, et tu as observé que Claude a répondu exactement comme prévu."
    }
  },

  {
    id: 13,
    title: "Gérer le contexte et l'historique",
    emoji: "🧹",
    duration: "10 minutes",
    section: "Partie 4 — Écrire de meilleurs prompts",
    learn: [
      { type: 'paragraph', text: "La fenêtre de contexte de Claude Code est de 200 000 tokens. Quand elle se remplit, les performances chutent. Claude commence à « oublier » des instructions données au début, ou à se contredire. Gérer le contexte, c'est garder Claude efficace." },
      { type: 'heading', text: "Comment le contexte grossit" },
      { type: 'list', items: [
        "Chaque échange (ta question + la réponse de Claude) s'accumule",
        "Chaque fichier lu via Read s'ajoute au contexte",
        "Chaque résultat de commande bash s'accumule",
        "Le contenu de CLAUDE.md est présent depuis le début",
      ]},
      { type: 'callout', variant: 'warning', title: "Le symptôme de la saturation", text: "Quand Claude commence à répéter ses réponses, à ignorer tes instructions ou à sembler « confus », c'est souvent le signe d'un contexte saturé — pas un bug du modèle." },
      { type: 'heading', text: "Trois stratégies pour gérer le contexte" },
      { type: 'paragraph', text: "1. /clear régulièrement. Entre deux tâches distinctes, utilise /clear. Claude oublie l'historique mais les fichiers qu'il a modifiés restent. C'est toujours le bon moment pour repartir propre." },
      { type: 'paragraph', text: "2. Une tâche = une session. N'essaie pas de faire 10 choses dans la même session. Finis une tâche, fais /clear, commence la suivante." },
      { type: 'paragraph', text: "3. Contrôle ce que tu donnes à lire. Plutôt que de demander à Claude d'explorer tout le projet, cible précisément les fichiers pertinents avec @. Moins Claude lit, moins le contexte grossit." },
      { type: 'callout', variant: 'note', title: "La compaction automatique", text: "Claude Code compacte automatiquement le contexte quand il approche de la limite. Cette compaction peut légèrement altérer la précision. C'est pour ça qu'il vaut mieux faire /clear manuellement avant d'atteindre cette limite." },
    ],
    verify: [
      { id: 'q1', question: "Quelle est la taille de la fenêtre de contexte de Claude Code ?", options: [{ id: 'a', text: "10 000 tokens" }, { id: 'b', text: "50 000 tokens" }, { id: 'c', text: "200 000 tokens" }, { id: 'd', text: "Illimitée" }], correctAnswer: 'c', explanation: "Claude Code dispose d'une fenêtre de contexte de 200 000 tokens. Chaque échange, chaque fichier lu, chaque résultat de commande s'y accumule jusqu'à saturation." },
      { id: 'q2', question: "Quel est le principal symptôme d'un contexte saturé ?", options: [{ id: 'a', text: "Claude Code plante" }, { id: 'b', text: "Claude commence à se répéter, ignore des instructions ou semble confus" }, { id: 'c', text: "Le terminal se ferme" }, { id: 'd', text: "La connexion Internet se coupe" }], correctAnswer: 'b', explanation: "Quand le contexte est trop plein, Claude a du mal à maintenir la cohérence sur l'ensemble de la conversation. Il peut oublier des instructions données au début ou se contredire." },
      { id: 'q3', question: "Que se passe-t-il quand tu fais /clear ?", options: [{ id: 'a', text: "Tous les fichiers modifiés sont annulés" }, { id: 'b', text: "L'historique de conversation est effacé, mais les fichiers modifiés restent" }, { id: 'c', text: "Claude Code redémarre complètement" }, { id: 'd', text: "Les paramètres sont réinitialisés" }], correctAnswer: 'b', explanation: "/clear vide la fenêtre de contexte de la conversation. Les modifications apportées aux fichiers restent intactes — Claude ne peut pas « annuler » ses modifications en fichiers." },
      { id: 'q4', question: "Pourquoi vaut-il mieux cibler les fichiers avec @ plutôt que demander à Claude d'explorer le projet ?", options: [{ id: 'a', text: "Claude refuse d'explorer" }, { id: 'b', text: "L'exploration consomme beaucoup de contexte via de nombreux appels Read" }, { id: 'c', text: "@ est plus rapide à taper" }, { id: 'd', text: "Claude comprend mieux avec @" }], correctAnswer: 'b', explanation: "Quand Claude explore, il appelle Read sur de nombreux fichiers, remplissant rapidement le contexte. @ donne directement le bon fichier, sans navigation intermédiaire." },
      { id: 'q5', question: "Quelle est la meilleure pratique pour organiser ses sessions Claude ?", options: [{ id: 'a', text: "Faire tout dans la même session pour que Claude garde le contexte" }, { id: 'b', text: "Une tâche distincte = une session ; /clear entre les tâches" }, { id: 'c', text: "Redémarrer Claude Code toutes les 30 minutes" }, { id: 'd', text: "Ne jamais utiliser /clear" }], correctAnswer: 'b', explanation: "Chaque tâche distincte mérite une session propre. /clear entre les tâches garde Claude focalisé et évite que l'historique d'une tâche pollue la suivante." },
    ],
    act: {
      title: "Observer la saturation et utiliser /clear",
      duration: "10 minutes",
      objective: "Remplir intentionnellement le contexte pour voir son impact, puis le vider avec /clear.",
      steps: [
        { step: 1, instruction: "Lance Claude Code dans un projet existant. Tape /usage pour voir le contexte actuel (probablement 0-5%)." },
        { step: 2, instruction: "Demande à Claude de lire 5 fichiers l'un après l'autre avec des questions sur chacun. Après chaque question, retape /usage. Observe le pourcentage augmenter." },
        { step: 3, instruction: "Quand tu atteins 30-40% de contexte, demande quelque chose que tu as mentionné au tout début de la session. Observe si Claude s'en souvient précisément." },
        { step: 4, instruction: "Tape /clear, puis repose la même question initiale. Claude ne se souvient de rien — contexte propre.", tip: "C'est normal et souhaitable. Tu repars sur une ardoise vierge." },
      ],
      validation: "Tu as observé la croissance du contexte avec /usage et utilisé /clear pour repartir proprement."
    }
  },

  {
    id: 14,
    title: "Les erreurs courantes et comment les éviter",
    emoji: "⚠️",
    duration: "15 minutes",
    section: "Partie 4 — Écrire de meilleurs prompts",
    learn: [
      { type: 'paragraph', text: "Après 300 jours d'utilisation quotidienne, Melvynx a identifié les erreurs que font tous les débutants — et la plupart des utilisateurs intermédiaires. Les voici, avec comment les corriger." },
      { type: 'heading', text: "Erreur 1 — Demander trop en même temps" },
      { type: 'paragraph', text: "« Refactorise tout le projet, ajoute des tests, mets à jour la documentation et corrige les bugs. » Claude va commencer quelque chose, s'égarer, oublier une partie de la demande. La règle : une demande = une tâche. Si tu as 4 choses à faire, fais 4 sessions séparées." },
      { type: 'heading', text: "Erreur 2 — Ne pas vérifier le travail" },
      { type: 'paragraph', text: "Claude Code n'est pas infaillible. Il peut modifier le mauvais fichier, ajouter du code dans la mauvaise fonction, ou produire quelque chose qui casse d'autres parties. Relis toujours ce que Claude a fait avant de continuer — surtout en mode Bypass Permission." },
      { type: 'heading', text: "Erreur 3 — Ignorer le message d'erreur" },
      { type: 'paragraph', text: "Quand Claude rencontre une erreur, il l'indique souvent dans sa réponse. Beaucoup d'utilisateurs lisent en diagonale et continuent sans corriger. Résultat : la tâche suivante échoue pour une raison liée à l'erreur précédente. Lis les erreurs." },
      { type: 'heading', text: "Erreur 4 — Relancer sans changer le prompt" },
      { type: 'paragraph', text: "Si Claude rate sa réponse une première fois et que tu relances exactement le même prompt, il va probablement refaire la même erreur. Change l'angle : précise ce qui était faux, ou donne plus de contexte." },
      { type: 'comparison', left: { title: "❌ Relancer sans corriger", text: "Essaie encore.\n\nClaude a le même contexte, il va probablement reproduire l'erreur." }, right: { title: "✓ Corriger le tir", text: "Ce n'est pas ça que je voulais. Le problème est que [X]. Essaie plutôt [Y] en évitant [Z].\n\nClaude a maintenant plus d'information pour corriger." } },
      { type: 'heading', text: "Erreur 5 — Laisser Claude travailler sans git" },
      { type: 'paragraph', text: "Claude peut modifier des dizaines de fichiers en une seule session. Si tu n'as pas fait de commit récent, tu risques de tout perdre en cas d'erreur. Règle d'or : commit avant de lancer Claude sur une grosse tâche." },
    ],
    verify: [
      { id: 'q1', question: "Quelle est la règle d'or pour structurer ses demandes à Claude ?", options: [{ id: 'a', text: "Regrouper le plus de tâches possible dans un seul prompt pour économiser du temps" }, { id: 'b', text: "Une demande = une tâche — éviter les demandes multiples" }, { id: 'c', text: "Toujours commencer par la tâche la plus difficile" }, { id: 'd', text: "Limiter ses prompts à 3 phrases" }], correctAnswer: 'b', explanation: "Claude gère mieux les tâches ciblées. Une demande qui mélange refactoring + tests + docs + bugs force Claude à jongler entre objectifs, ce qui augmente les erreurs et les oublis." },
      { id: 'q2', question: "Pourquoi faut-il relire ce que Claude a fait avant de continuer ?", options: [{ id: 'a', text: "Par politesse" }, { id: 'b', text: "Claude peut modifier le mauvais fichier ou casser d'autres parties du code" }, { id: 'c', text: "Pour apprendre de Claude" }, { id: 'd', text: "C'est obligatoire en mode Standard" }], correctAnswer: 'b', explanation: "Claude Code n'est pas infaillible. Même avec un bon prompt, il peut faire une erreur de localisation ou de logique. Vérifier avant de continuer évite de construire sur une erreur." },
      { id: 'q3', question: "Si Claude rate une réponse, quelle est la bonne réaction ?", options: [{ id: 'a', text: "Relancer exactement le même prompt" }, { id: 'b', text: "Corriger le prompt en précisant ce qui était faux et ce qu'il faut éviter" }, { id: 'c', text: "Changer de modèle" }, { id: 'd', text: "Redémarrer Claude Code" }], correctAnswer: 'b', explanation: "Relancer le même prompt donne à Claude le même contexte — il risque de reproduire l'erreur. Corriger le prompt avec plus d'information change l'angle et améliore les chances de succès." },
      { id: 'q4', question: "Quelle précaution prendre avant de laisser Claude modifier beaucoup de fichiers ?", options: [{ id: 'a', text: "Sauvegarder sur une clé USB" }, { id: 'b', text: "Faire un commit git" }, { id: 'c', text: "Passer en mode Standard" }, { id: 'd', text: "Désactiver la connexion Internet" }], correctAnswer: 'b', explanation: "Un commit récent te donne un point de retour sûr. Si Claude fait une erreur sur 20 fichiers, un git reset te ramène exactement où tu étais avant." },
      { id: 'q5', question: "Pourquoi ignorer les messages d'erreur de Claude est dangereux ?", options: [{ id: 'a', text: "Claude se vexe" }, { id: 'b', text: "L'erreur non corrigée va souvent provoquer l'échec des tâches suivantes" }, { id: 'c', text: "Ça consomme plus de tokens" }, { id: 'd', text: "Claude arrête de travailler" }], correctAnswer: 'b', explanation: "Les erreurs en chaîne sont fréquentes. Si Claude ne peut pas lire un fichier parce qu'une dépendance manque, toutes les tâches suivantes qui nécessitent ce fichier échoueront." },
    ],
    act: {
      title: "Corriger 3 situations difficiles",
      duration: "15 minutes",
      objective: "S'entraîner à réagir correctement face aux erreurs et aux réponses ratées de Claude.",
      steps: [
        { step: 1, instruction: "Crée intentionnellement une mauvaise situation : demande à Claude quelque chose d'ambigu sur un fichier existant. Observe ce qu'il fait." },
        { step: 2, instruction: "Sans utiliser /clear, corrige le tir avec un prompt de correction : « Ce n'est pas ce que je voulais. Le problème est [X]. Reviens à l'état original du fichier et essaie plutôt [Y]. »" },
        { step: 3, instruction: "Teste l'erreur 5 : vérifie l'état de ton git (git status) avant de lancer une grosse tâche. Si tu n'as pas de commit récent, fais-en un avant de continuer.", tip: "!git status dans Claude Code — sans quitter la session." },
      ],
      validation: "Tu as corrigé une réponse ratée sans relancer le même prompt, et tu as vérifié l'état de git avant une grosse session."
    }
  },

  {
    id: 15,
    title: "Déboguer avec Claude Code",
    emoji: "🐛",
    duration: "15 minutes",
    section: "Partie 4 — Écrire de meilleurs prompts",
    learn: [
      { type: 'paragraph', text: "Claude Code est particulièrement puissant pour le débogage. Contrairement à une recherche Google, il peut lire ton code, analyser l'erreur dans son contexte exact, et proposer une correction adaptée à ta base de code." },
      { type: 'heading', text: "La technique du triplé : erreur + fichier + contexte" },
      { type: 'paragraph', text: "Pour un débogage efficace, donne toujours 3 éléments : l'erreur exacte (copie-colle le message d'erreur complet), le fichier concerné avec @, et le contexte (qu'est-ce qui a changé récemment ?)." },
      { type: 'highlight', text: "Voici l'erreur que j'obtiens : [colle l'erreur]. Elle vient de @src/api.ts. J'ai récemment ajouté [X]. Identifie la cause et propose une correction." },
      { type: 'heading', text: "Utiliser la commande ! pour capturer les erreurs" },
      { type: 'paragraph', text: "Au lieu de copier-coller une erreur depuis un autre terminal, utilise ! pour lancer la commande directement dans Claude. Il voit l'erreur dans son contexte et peut réagir immédiatement." },
      { type: 'list', items: [
        "!npm run build — capture les erreurs de compilation",
        "!npm test -- --verbose — voit les tests qui échouent",
        "!npm run dev 2>&1 | head -50 — limite la sortie pour ne pas saturer le contexte",
      ]},
      { type: 'callout', variant: 'key', title: "Débogage par bisection", text: "Pour un bug difficile à isoler : demande à Claude d'ajouter des console.log stratégiques, relance avec !, observe où ça casse, puis demande-lui de corriger. C'est la même méthode qu'un développeur expérimenté utilise — mais Claude le fait 10x plus vite." },
      { type: 'heading', text: "Quand Claude ne trouve pas le bug" },
      { type: 'paragraph', text: "Si Claude tourne en rond, fais /clear et reformule avec plus de contexte. Décris le comportement attendu ET le comportement observé. Ajoute le fichier où le bug se manifeste ET les fichiers voisins qui pourraient être impliqués." },
    ],
    verify: [
      { id: 'q1', question: "Quels sont les 3 éléments à donner pour un débogage efficace ?", options: [{ id: 'a', text: "Le navigateur, l'OS et la version Node" }, { id: 'b', text: "L'erreur exacte, le fichier concerné avec @, le contexte récent" }, { id: 'c', text: "Le prompt complet, le fichier complet, et l'historique git" }, { id: 'd', text: "Le comportement attendu, le délai, et le budget" }], correctAnswer: 'b', explanation: "Ces 3 éléments donnent à Claude tout ce dont il a besoin : l'erreur exacte lui dit ce qui a cassé, le fichier ciblé lui donne le code concerné, et le contexte récent lui indique ce qui a changé." },
      { id: 'q2', question: "Pourquoi utiliser ! pour lancer une commande plutôt que de copier-coller l'erreur ?", options: [{ id: 'a', text: "! est plus rapide à taper" }, { id: 'b', text: "Claude voit l'erreur dans son contexte et peut réagir immédiatement" }, { id: 'c', text: "Copier-coller des erreurs est interdit" }, { id: 'd', text: "! capture les warnings que copier-coller manque" }], correctAnswer: 'b', explanation: "Avec !, Claude exécute la commande, voit la sortie dans le contexte de la conversation, et peut analyser et corriger l'erreur sans que tu aies à faire de copier-coller." },
      { id: 'q3', question: "Qu'est-ce que le débogage par bisection ?", options: [{ id: 'a', text: "Diviser le fichier en deux pour tester chaque moitié" }, { id: 'b', text: "Ajouter des console.log, relancer, observer où ça casse, puis corriger" }, { id: 'c', text: "Supprimer la moitié du code pour isoler le bug" }, { id: 'd', text: "Chercher le bug dans l'historique git" }], correctAnswer: 'b', explanation: "Cette technique consiste à ajouter des points de contrôle (console.log) pour voir jusqu'où le code s'exécute correctement. Claude peut ajouter ces logs, tu relances, et vous isolez progressivement le bug." },
      { id: 'q4', question: "Comment limiter la sortie d'une commande bash pour ne pas saturer le contexte ?", options: [{ id: 'a', text: "En utilisant /context" }, { id: 'b', text: "Avec 2>&1 | head -50 pour limiter à 50 lignes" }, { id: 'c', text: "Claude limite automatiquement" }, { id: 'd', text: "En n'utilisant que des commandes courtes" }], correctAnswer: 'b', explanation: "!npm run dev 2>&1 | head -50 capture les 50 premières lignes de sortie (erreurs incluses). Suffisant pour identifier le bug sans inonder le contexte avec des centaines de lignes de logs." },
      { id: 'q5', question: "Que faire si Claude tourne en rond sur un bug et ne le trouve pas ?", options: [{ id: 'a', text: "Insister en répétant la même demande" }, { id: 'b', text: "Faire /clear et reformuler avec comportement attendu, comportement observé, et fichiers voisins" }, { id: 'c', text: "Chercher la solution sur Stack Overflow" }, { id: 'd', text: "Changer de modèle" }], correctAnswer: 'b', explanation: "/clear efface un contexte potentiellement confus. Reformuler avec les comportements attendu ET observé, plus les fichiers adjacents, donne à Claude un nouvel angle d'attaque plus précis." },
    ],
    act: {
      title: "Déboguer un vrai bug avec la technique du triplé",
      duration: "15 minutes",
      objective: "Appliquer la méthode structurée sur un bug réel ou simulé.",
      steps: [
        { step: 1, instruction: "Trouve un bug dans un projet existant, ou introduis-en un intentionnellement : dans un fichier JS, remplace une variable par une faute de frappe (ex: 'reponse' au lieu de 'response')." },
        { step: 2, instruction: "Lance la commande de build ou de test avec ! pour capturer l'erreur dans Claude Code.", tip: "!npm run build ou !npm test" },
        { step: 3, instruction: "Formule le prompt de débogage complet : l'erreur capturée, le fichier avec @, et ce qui a changé récemment. Donne les 3 éléments en une seule demande." },
        { step: 4, instruction: "Observe la correction proposée par Claude. Applique-la et relance la commande avec ! pour vérifier que l'erreur est résolue." },
      ],
      validation: "Tu as utilisé ! pour capturer une erreur directement, fourni les 3 éléments clés et reçu une correction qui résout le bug."
    }
  },

  // ─── PARTIE 5 — WORKFLOWS DE DÉVELOPPEMENT ───────────────────────────────

  {
    id: 16,
    title: "Workflow Git avec Claude Code",
    emoji: "🌿",
    duration: "15 minutes",
    section: "Partie 5 — Workflows de développement",
    learn: [
      { type: 'paragraph', text: "Git et Claude Code forment un duo redoutable. Claude peut créer des branches, rédiger des messages de commit, reviewer le diff avant de pousser, et même résoudre des conflits de merge. Voici le workflow complet." },
      { type: 'heading', text: "Le workflow en 4 temps" },
      { type: 'list', items: [
        "1. Commit avant de commencer. Avant toute session Claude importante, fais !git add -A && !git commit -m 'checkpoint before Claude session'. C'est ton filet de sécurité.",
        "2. Claude travaille. Laisse Claude faire ses modifications — il peut changer des dizaines de fichiers.",
        "3. Review le diff. !git diff pour voir exactement ce que Claude a changé. Relis. Valide ou corrige.",
        "4. Commit avec un bon message. Demande à Claude de rédiger le message de commit.",
      ]},
      { type: 'heading', text: "Demander à Claude de rédiger les commits" },
      { type: 'paragraph', text: "Un bon message de commit explique le POURQUOI, pas le QUOI. Claude lit le diff et rédige un message professionnel. Commande : « Écris un message de commit pour les changements actuels (git diff). Respecte le format : titre court + corps avec le pourquoi. »" },
      { type: 'callout', variant: 'key', title: "Claude comme code reviewer", text: "Avant de pousser sur une branche partagée, demande à Claude : « Review le diff de cette branche. Cherche les bugs potentiels, les problèmes de performance et les failles de sécurité. » C'est un deuxième regard gratuit et instantané." },
      { type: 'heading', text: "Résoudre les conflits de merge" },
      { type: 'paragraph', text: "Les conflits de merge sont souvent sources de stress. Laisse Claude les résoudre : ouvre le fichier en conflit avec @, montre-lui les deux versions et demande-lui de choisir la bonne fusion. Il comprend le contexte métier mieux que les marqueurs <<<<<<." },
    ],
    verify: [
      { id: 'q1', question: "Pourquoi faire un commit avant de lancer Claude sur une grosse tâche ?", options: [{ id: 'a', text: "Git bloque Claude Code sans commit récent" }, { id: 'b', text: "Pour avoir un point de retour si Claude fait des erreurs" }, { id: 'c', text: "Pour que Claude connaisse l'historique" }, { id: 'd', text: "C'est une obligation légale" }], correctAnswer: 'b', explanation: "Un commit avant une session Claude est ton filet de sécurité. Si Claude fait des modifications non souhaitées sur 20 fichiers, git reset --hard te ramène exactement à l'état d'avant la session." },
      { id: 'q2', question: "Quelle commande permet de voir exactement ce que Claude a modifié ?", options: [{ id: 'a', text: "!git log" }, { id: 'b', text: "!git diff" }, { id: 'c', text: "!git status" }, { id: 'd', text: "!git show" }], correctAnswer: 'b', explanation: "!git diff affiche les modifications ligne par ligne — exactement ce qui a été ajouté (vert) et supprimé (rouge). C'est l'outil de review indispensable avant de committer." },
      { id: 'q3', question: "Qu'est-ce qu'un bon message de commit, selon Claude Code ?", options: [{ id: 'a', text: "Un message qui liste tous les fichiers modifiés" }, { id: 'b', text: "Un message court qui explique le POURQUOI, pas le QUOI" }, { id: 'c', text: "Un message avec la date et l'heure" }, { id: 'd', text: "Un message identique au nom du fichier modifié" }], correctAnswer: 'b', explanation: "Le QUOI est déjà dans le diff — inutile de le répéter. Le POURQUOI (motivations, contexte métier, contraintes) est ce que l'historique git doit conserver pour les équipiers futurs." },
      { id: 'q4', question: "Comment utiliser Claude comme code reviewer avant un push ?", options: [{ id: 'a', text: "Lui donner accès à GitHub" }, { id: 'b', text: "Lui demander de reviewer le git diff en cherchant bugs, performance et sécurité" }, { id: 'c', text: "Lui faire exécuter les tests" }, { id: 'd', text: "Lui montrer le CHANGELOG" }], correctAnswer: 'b', explanation: "Le diff contient exactement les changements à valider. Claude peut analyser chaque modification et identifier des problèmes qu'un humain fatigué pourrait manquer." },
      { id: 'q5', question: "Comment Claude résout-il les conflits de merge ?", options: [{ id: 'a', text: "Il choisit toujours la version la plus récente" }, { id: 'b', text: "En lisant les deux versions dans le contexte et en proposant la fusion correcte selon le sens métier" }, { id: 'c', text: "Il supprime les marqueurs de conflit automatiquement" }, { id: 'd', text: "Il ne peut pas résoudre les conflits" }], correctAnswer: 'b', explanation: "Claude lit les deux versions du conflit (<<<< vs >>>>), comprend le contexte des deux modifications, et propose une fusion qui préserve l'intention de chacune." },
    ],
    act: {
      title: "Workflow complet sur une feature",
      duration: "15 minutes",
      objective: "Appliquer le workflow Git complet avec Claude : commit de sécurité, session, review, commit final.",
      steps: [
        { step: 1, instruction: "Dans un projet git, fais un commit de sécurité avant de commencer : !git add -A && !git commit -m 'checkpoint before Claude session'" },
        { step: 2, instruction: "Demande à Claude une modification simple : ajouter une fonction, corriger un style, modifier un texte. Laisse-le travailler." },
        { step: 3, instruction: "Tape !git diff pour voir exactement ce que Claude a changé. Lis chaque modification." },
        { step: 4, instruction: "Demande à Claude de rédiger le message de commit : « Rédige un message de commit pour ces changements. Titre court + corps qui explique le pourquoi. »", tip: "Copie le message proposé et fais le commit avec !git commit -m '[message]'" },
      ],
      validation: "Tu as un commit de sécurité, les modifications de Claude, un review du diff, et un commit final avec un message rédigé par Claude."
    }
  },

  {
    id: 17,
    title: "Construire une feature de A à Z",
    emoji: "🏗️",
    duration: "20 minutes",
    section: "Partie 5 — Workflows de développement",
    learn: [
      { type: 'paragraph', text: "Le vrai test de Claude Code, c'est de construire une feature complète — pas juste modifier un fichier. Voici comment structurer une session pour aller de l'idée au code qui fonctionne." },
      { type: 'heading', text: "Étape 1 — Le brief : Plan Mode avant tout" },
      { type: 'paragraph', text: "Avant que Claude touche au code, passe en Plan Mode (Shift+Tab jusqu'à voir « Plan »). Décris la feature en détail. Claude va produire un plan d'implémentation : fichiers à créer, fichiers à modifier, ordre des opérations." },
      { type: 'callout', variant: 'key', title: "Valide le plan avant d'exécuter", text: "Le Plan Mode est là pour ça. Lis le plan. Si quelque chose te semble faux (mauvaise architecture, approche trop complexe), corrige-le avant que Claude ne commence. Modifier un plan prend 10 secondes. Modifier 30 fichiers de code prend 10 minutes." },
      { type: 'heading', text: "Étape 2 — Décomposer en tâches" },
      { type: 'paragraph', text: "Pour les features complexes, ne demande pas à Claude de tout faire d'un coup. Décompose : « D'abord crée le composant vide. Ensuite ajoute les props. Ensuite branche l'API. » À chaque étape, vérifie que l'application tourne toujours." },
      { type: 'heading', text: "Étape 3 — Tester en continu" },
      { type: 'paragraph', text: "Utilise ! pour lancer l'application régulièrement pendant le développement. !npm run dev après chaque grosse modification. Si quelque chose casse, tu le sais immédiatement — pas à la fin quand 20 fichiers ont changé." },
      { type: 'comparison', left: { title: "❌ Approche monolithique", text: "Demander à Claude de construire toute la feature en une seule session. 40 fichiers modifiés. Un bug quelque part. Impossible à déboguer." }, right: { title: "✓ Approche incrémentale", text: "Plan Mode → valider le plan → construire par étapes → tester après chaque étape. Plus lent en apparence, beaucoup plus rapide en réalité." } },
    ],
    verify: [
      { id: 'q1', question: "Pourquoi utiliser Plan Mode avant de construire une feature ?", options: [{ id: 'a', text: "Pour voir le code que Claude va écrire" }, { id: 'b', text: "Pour valider l'architecture et l'ordre des opérations avant de toucher au code" }, { id: 'c', text: "Pour économiser des tokens" }, { id: 'd', text: "Plan Mode est obligatoire pour les grosses features" }], correctAnswer: 'b', explanation: "Le Plan Mode force Claude à réfléchir avant d'agir. Tu peux corriger une mauvaise architecture en modifiant le plan — bien plus rapide que de défaire 30 fichiers de code déjà modifiés." },
      { id: 'q2', question: "Quelle est l'approche recommandée pour construire une feature complexe ?", options: [{ id: 'a', text: "Tout demander en une seule session pour aller plus vite" }, { id: 'b', text: "Décomposer en petites tâches séquentielles avec vérification entre chaque" }, { id: 'c', text: "Écrire le code manuellement puis demander à Claude de l'améliorer" }, { id: 'd', text: "Demander à plusieurs instances Claude en parallèle" }], correctAnswer: 'b', explanation: "L'approche incrémentale semble plus lente mais est plus sûre. Tester après chaque étape permet de détecter les bugs immédiatement, avant qu'ils ne se propagent à travers tous les fichiers." },
      { id: 'q3', question: "Que faire si l'application casse pendant la construction d'une feature ?", options: [{ id: 'a', text: "Continuer — Claude finira par tout corriger" }, { id: 'b', text: "Stopper immédiatement et déboguer avant de continuer" }, { id: 'c', text: "Revenir à la version précédente et tout recommencer" }, { id: 'd', text: "Passer en mode Bypass pour aller plus vite" }], correctAnswer: 'b', explanation: "Continuer sur une base cassée accumule les erreurs. Corriger immédiatement quand tu as encore une vision claire de ce qui a changé est toujours plus efficace que déboguer après 20 étapes supplémentaires." },
      { id: 'q4', question: "À quelle fréquence lancer !npm run dev pendant le développement d'une feature ?", options: [{ id: 'a', text: "Seulement à la fin" }, { id: 'b', text: "Après chaque grosse modification" }, { id: 'c', text: "Toutes les 5 minutes" }, { id: 'd', text: "Jamais — Claude vérifie lui-même" }], correctAnswer: 'b', explanation: "Lancer l'application après chaque étape significative permet de confirmer que la base reste stable. Plus tu attends pour tester, plus tu accumules de changements difficiles à déboguer." },
      { id: 'q5', question: "Quelle est la vraie valeur du Plan Mode pour les features complexes ?", options: [{ id: 'a', text: "Il documente automatiquement le code" }, { id: 'b', text: "Il permet de corriger l'architecture avant que le code soit écrit" }, { id: 'c', text: "Il est plus rapide que le mode Standard" }, { id: 'd', text: "Il génère les tests automatiquement" }], correctAnswer: 'b', explanation: "Corriger un plan textuel prend des secondes. Corriger une architecture implémentée dans 30 fichiers peut prendre des heures. Le Plan Mode déplace le moment de correction au meilleur endroit : avant." },
    ],
    act: {
      title: "Construire une mini-feature avec Plan Mode",
      duration: "20 minutes",
      objective: "Construire une petite feature complète en suivant la méthode Plan → décomposer → tester.",
      steps: [
        { step: 1, instruction: "Dans un projet existant, identifie une petite feature à ajouter. Exemples : un bouton de dark mode, un champ de recherche, une page de profil basique." },
        { step: 2, instruction: "Passe en Plan Mode (Shift+Tab) et décris la feature complète à Claude. Lis son plan. S'il te paraît faux, corrige-le avant de valider." },
        { step: 3, instruction: "Passe en Accept Edits et demande à Claude de commencer par la première étape seulement. Quand c'est fait, lance !npm run dev pour vérifier que ça tourne." },
        { step: 4, instruction: "Continue étape par étape, en testant après chaque modification majeure. Ne passe à l'étape suivante que si la précédente fonctionne." },
      ],
      validation: "Ta feature est construite par étapes successives, avec un test de l'application après chaque étape. L'application fonctionne à la fin."
    }
  },

  {
    id: 18,
    title: "Tests et qualité de code",
    emoji: "🧪",
    duration: "15 minutes",
    section: "Partie 5 — Workflows de développement",
    learn: [
      { type: 'paragraph', text: "Claude Code peut écrire des tests, mais écrire les bons tests demande une stratégie. Voici comment utiliser Claude pour améliorer la qualité de ton code sans te noyer sous les tests inutiles." },
      { type: 'heading', text: "Demander les bons tests" },
      { type: 'paragraph', text: "Ne demande pas « ajoute des tests ». Demande des tests spécifiques : « Écris des tests unitaires pour la fonction calculatePrice dans @src/utils/pricing.ts. Couvre les cas normaux, les valeurs nulles, et les nombres négatifs. »" },
      { type: 'list', title: "Les 3 types de tests que Claude gère bien :", items: [
        "Tests unitaires — tester une fonction isolée avec des cas aux limites",
        "Tests d'intégration — tester qu'un composant se comporte correctement avec ses dépendances",
        "Tests de snapshot — détecter les changements visuels involontaires (React/Vue)",
      ]},
      { type: 'heading', text: "La technique TDD inversée" },
      { type: 'paragraph', text: "Pour les nouvelles features, essaie ça : demande à Claude d'écrire les tests AVANT le code. Il est forcé de comprendre ce que la feature doit faire avant de l'implémenter. Les tests servent de spécification. Le code qu'il écrit ensuite est généralement plus propre." },
      { type: 'callout', variant: 'note', title: "Attention aux faux tests", text: "Claude peut écrire des tests qui passent mais ne testent rien d'utile. Vérifie toujours que les tests échouent si tu casses intentionnellement la fonction. Si un test passe même quand la logique est fausse, il ne protège contre rien." },
      { type: 'heading', text: "Code review automatique" },
      { type: 'paragraph', text: "Avant de merger une branche, demande à Claude : « Analyse @src/components/Form.tsx pour détecter : duplications de code, variables non utilisées, fonctions trop longues, et problèmes de performance. » C'est un linter intelligent qui comprend l'intention." },
    ],
    verify: [
      { id: 'q1', question: "Comment demander des tests utiles à Claude ?", options: [{ id: 'a', text: "Ajoute des tests à mon projet" }, { id: 'b', text: "Écris des tests unitaires pour [fonction] dans @[fichier]. Couvre [cas normaux + limites + erreurs]" }, { id: 'c', text: "Génère des tests automatiquement" }, { id: 'd', text: "Teste tout le code" }], correctAnswer: 'b', explanation: "Préciser la fonction, le fichier, et les cas à couvrir permet à Claude d'écrire des tests ciblés et pertinents. Un test doit couvrir des scénarios précis — pas juste 'quelque chose'." },
      { id: 'q2', question: "Qu'est-ce que la technique TDD inversée avec Claude ?", options: [{ id: 'a', text: "Écrire le code d'abord, puis les tests" }, { id: 'b', text: "Demander à Claude d'écrire les tests avant d'implémenter la feature" }, { id: 'c', text: "Ne jamais écrire de tests" }, { id: 'd', text: "Supprimer les tests une fois le code mergé" }], correctAnswer: 'b', explanation: "En écrivant les tests d'abord, Claude est forcé de comprendre les exigences de la feature avant de coder. Les tests servent de spécification — le code qui suit est généralement plus propre." },
      { id: 'q3', question: "Comment détecter un faux test (qui passe mais ne teste rien) ?", options: [{ id: 'a', text: "Les faux tests sont impossibles à détecter" }, { id: 'b', text: "Casser intentionnellement la logique testée et vérifier que le test échoue" }, { id: 'c', text: "Lire le nombre d'assertions dans le test" }, { id: 'd', text: "Vérifier que le test prend plus de 100ms" }], correctAnswer: 'b', explanation: "Un bon test doit échouer quand la logique qu'il teste est fausse. Si tu modifies la fonction pour retourner n'importe quoi et que le test passe quand même, le test ne protège contre rien." },
      { id: 'q4', question: "Quel avantage a Claude en code review par rapport à un linter classique ?", options: [{ id: 'a', text: "Il est plus rapide" }, { id: 'b', text: "Il comprend l'intention du code et détecte des problèmes logiques, pas juste syntaxiques" }, { id: 'c', text: "Il génère des corrections automatiques" }, { id: 'd', text: "Il vérifie le style" }], correctAnswer: 'b', explanation: "Un linter détecte les violations de règles syntaxiques. Claude comprend ce que le code est censé faire et peut identifier des problèmes logiques qu'aucune règle de linter ne couvrirait." },
      { id: 'q5', question: "Parmi ces types de tests, lequel Claude gère-t-il particulièrement bien ?", options: [{ id: 'a', text: "Tests de charge (10 000 requêtes simultanées)" }, { id: 'b', text: "Tests de pénétration de sécurité" }, { id: 'c', text: "Tests unitaires, d'intégration, et snapshots" }, { id: 'd', text: "Tests de compatibilité navigateur" }], correctAnswer: 'c', explanation: "Claude excelle dans les tests unitaires (logique de fonction), d'intégration (interaction de composants), et snapshots (détection de changements visuels). Les tests de performance ou sécurité nécessitent des outils spécialisés." },
    ],
    act: {
      title: "Écrire des tests pour une fonction existante",
      duration: "15 minutes",
      objective: "Utiliser Claude pour écrire des tests pertinents et vérifier qu'ils fonctionnent réellement.",
      steps: [
        { step: 1, instruction: "Choisis une fonction dans ton projet qui n'a pas de tests. Donne-la à Claude avec @ et demande : « Écris des tests unitaires pour cette fonction. Couvre : le cas normal, les valeurs null/undefined, et au moins un cas limite. »" },
        { step: 2, instruction: "Lance les tests avec !npm test pour vérifier qu'ils passent tous." },
        { step: 3, instruction: "Modifie intentionnellement la logique de la fonction (casse-la délibérément). Relance les tests. Ils doivent échouer. Si un test passe quand il devrait échouer, il est inutile.", tip: "Remets la fonction dans son état original après le test." },
      ],
      validation: "Tu as des tests qui passent quand le code est correct ET qui échouent quand le code est cassé — c'est la définition d'un vrai test."
    }
  },

  {
    id: 19,
    title: "Refactoring et documentation",
    emoji: "♻️",
    duration: "15 minutes",
    section: "Partie 5 — Workflows de développement",
    learn: [
      { type: 'paragraph', text: "Refactorer du code existant est l'une des tâches où Claude Code brille le plus. Il peut lire du code hérité, comprendre son intention, et le réécrire plus proprement — sans en changer le comportement." },
      { type: 'heading', text: "Principes du refactoring avec Claude" },
      { type: 'list', items: [
        "Toujours avoir des tests avant de refactorer. Claude peut en ajouter s'il n'y en a pas.",
        "Un refactoring = un type de changement. Pas « améliore tout le fichier » mais « extrais les fonctions longues en sous-fonctions ».",
        "Toujours relancer les tests après. Si quelque chose casse, on le sait immédiatement.",
      ]},
      { type: 'heading', text: "Les refactorings les plus utiles" },
      { type: 'comparison', left: { title: "Demandes vagues", text: "Améliore ce code.\nRends ce code plus propre.\nOptimise ce fichier." }, right: { title: "Demandes précises", text: "Extrais les blocs de logique > 20 lignes en fonctions nommées.\nRemplace les callbacks imbriqués par des async/await.\nDécompose ce composant de 400 lignes en sous-composants." } },
      { type: 'heading', text: "Documentation automatique" },
      { type: 'paragraph', text: "Claude peut générer la documentation de ton code à la demande. Pour une fonction : « Ajoute un commentaire JSDoc à cette fonction qui décrit ses paramètres, son retour, et ses cas d'erreur. » Pour un fichier entier : « Génère un README.md qui explique ce que fait ce module, comment l'utiliser, et donne 3 exemples d'utilisation. »" },
      { type: 'callout', variant: 'warning', title: "Le piège du sur-refactoring", text: "Claude peut avoir tendance à trop refactorer — ajouter des abstractions inutiles, créer des classes là où des fonctions simples suffisent. Si le refactoring rend le code plus difficile à comprendre, c'est le mauvais sens." },
    ],
    verify: [
      { id: 'q1', question: "Pourquoi avoir des tests avant de refactorer ?", options: [{ id: 'a', text: "Les tests sont obligatoires pour que Claude refactore" }, { id: 'b', text: "Les tests garantissent que le comportement n'a pas changé après le refactoring" }, { id: 'c', text: "Pour documenter ce que fait le code" }, { id: 'd', text: "Pour voir les dépendances" }], correctAnswer: 'b', explanation: "Un refactoring qui casse le comportement n'est pas un refactoring — c'est une régression. Les tests sont le filet de sécurité qui confirme que l'amélioration de la forme n'a pas altéré le fond." },
      { id: 'q2', question: "Quelle est la bonne façon de demander un refactoring à Claude ?", options: [{ id: 'a', text: "Améliore tout le projet" }, { id: 'b', text: "Rends le code plus propre" }, { id: 'c', text: "Extrais les blocs de logique > 20 lignes en fonctions nommées dans @[fichier]" }, { id: 'd', text: "Optimise les performances" }], correctAnswer: 'c', explanation: "Un refactoring ciblé (un type de changement, dans un fichier précis) est prévisible et vérifiable. Une demande générique laisse Claude décider seul de ce qui mérite d'être changé." },
      { id: 'q3', question: "Quel est le signe que Claude a trop refactoré ?", options: [{ id: 'a', text: "Le code est plus court" }, { id: 'b', text: "Le refactoring rend le code plus difficile à comprendre" }, { id: 'c', text: "Des fonctions ont été extraites" }, { id: 'd', text: "Les noms de variables ont changé" }], correctAnswer: 'b', explanation: "L'objectif du refactoring est d'améliorer la lisibilité et la maintenabilité. Si le résultat est plus abstrait ou plus difficile à suivre, le refactoring n'a pas atteint son but." },
      { id: 'q4', question: "Comment demander à Claude de documenter une fonction ?", options: [{ id: 'a', text: "Documente mon code" }, { id: 'b', text: "Ajoute un commentaire JSDoc à @[fichier] qui décrit les paramètres, le retour, et les cas d'erreur" }, { id: 'c', text: "Écris un README" }, { id: 'd', text: "Explique ce fichier" }], correctAnswer: 'b', explanation: "Préciser le type de documentation (JSDoc), le fichier cible, et le contenu attendu (params, retour, erreurs) donne à Claude un cadre précis pour produire une documentation utile." },
      { id: 'q5', question: "Dans quel ordre faut-il procéder pour refactorer en toute sécurité ?", options: [{ id: 'a', text: "Refactorer → Tester → Committer" }, { id: 'b', text: "Avoir des tests existants → Refactorer → Relancer les tests → Committer si OK" }, { id: 'c', text: "Committer → Refactorer → Tester" }, { id: 'd', text: "Refactorer tout d'abord, tester plus tard" }], correctAnswer: 'b', explanation: "Les tests doivent exister avant le refactoring pour avoir un point de comparaison. Après le refactoring, ils confirment que le comportement est identique. Sans ce filet, un refactoring qui casse quelque chose peut passer inaperçu." },
    ],
    act: {
      title: "Refactorer un fichier avec Claude",
      duration: "15 minutes",
      objective: "Appliquer un refactoring ciblé sur un fichier réel et valider qu'aucun comportement n'a changé.",
      steps: [
        { step: 1, instruction: "Choisis un fichier de ton projet qui contient du code que tu trouves difficile à lire. Ouvre-le avec @." },
        { step: 2, instruction: "Demande un refactoring ciblé : « Dans ce fichier, extrais les blocs de code répétés en fonctions séparées. Ne touche pas à la logique métier. »" },
        { step: 3, instruction: "Lance les tests si tu en as : !npm test. Vérifie que tout passe encore. Sinon, inspecte le diff avec !git diff." },
        { step: 4, instruction: "Demande à Claude d'ajouter un commentaire JSDoc à chacune des nouvelles fonctions créées.", tip: "Si le résultat te semble trop abstrait, dis-le à Claude et demande-lui de simplifier." },
      ],
      validation: "Le fichier est refactorisé, les tests passent toujours (ou le diff est lisible et correct), et les nouvelles fonctions sont documentées."
    }
  },

  // ─── PARTIE 6 — ALLER PLUS LOIN ──────────────────────────────────────────

  {
    id: 20,
    title: "Claude Code pour les non-développeurs",
    emoji: "🙌",
    duration: "15 minutes",
    section: "Partie 6 — Aller plus loin",
    learn: [
      { type: 'paragraph', text: "Claude Code n'est pas réservé aux développeurs. Si tu travailles avec des données, des fichiers, ou tout type de texte structuré, Claude Code peut t'aider. Voici comment." },
      { type: 'heading', text: "Scripts Python et automatisation" },
      { type: 'paragraph', text: "Tu n'as pas besoin de savoir coder pour demander à Claude d'automatiser une tâche répétitive. Décris ce que tu fais manuellement, et Claude écrit le script. Exemples : renommer 500 fichiers selon une convention, extraire des données d'un CSV, envoyer des emails automatiques." },
      { type: 'callout', variant: 'key', title: "La règle de Melvynx", text: "Si tu fais la même chose plus de 3 fois, c'est une tâche pour Claude Code. Décris-la, il l'automatise." },
      { type: 'heading', text: "Traitement de fichiers en masse" },
      { type: 'list', items: [
        "CSV / Excel → demande à Claude de parser, filtrer, fusionner, ou analyser des données",
        "JSON → transformer, reformatter, extraire des champs spécifiques",
        "Images → avec les bons outils (Pillow, Sharp), renommer, redimensionner, convertir en masse",
        "Documents Word/PDF → extraire le texte, reformatter, résumer",
      ]},
      { type: 'heading', text: "Le workflow sans code" },
      { type: 'paragraph', text: "1. Décris ta tâche en langage naturel. 2. Claude écrit le script. 3. Lance le script avec !python script.py (ou !node script.js). 4. Vérifie le résultat. Si ce n'est pas ce que tu voulais, décris l'écart et Claude corrige." },
      { type: 'comparison', left: { title: "Avant Claude Code", text: "3 heures à cliquer pour renommer 300 fichiers manuellement." }, right: { title: "Avec Claude Code", text: "« Renomme tous les fichiers du dossier /images selon le format YYYY-MM-DD_nom-original. » Fait en 30 secondes." } },
    ],
    verify: [
      { id: 'q1', question: "Faut-il savoir coder pour utiliser Claude Code sur des tâches d'automatisation ?", options: [{ id: 'a', text: "Oui — il faut au moins connaître Python" }, { id: 'b', text: "Non — décrire la tâche en langage naturel suffit" }, { id: 'c', text: "Oui — il faut comprendre les scripts générés" }, { id: 'd', text: "Non, mais il faut savoir lire du JSON" }], correctAnswer: 'b', explanation: "Claude Code génère le script adapté à ta description. Tu n'as pas besoin de comprendre le code pour l'utiliser — tu décris le résultat attendu, Claude s'occupe de l'implémentation." },
      { id: 'q2', question: "Selon la règle de Melvynx, quand automatiser une tâche avec Claude ?", options: [{ id: 'a', text: "Uniquement pour les tâches très complexes" }, { id: 'b', text: "Si tu fais la même chose plus de 3 fois" }, { id: 'c', text: "Seulement si tu connais le bon langage de script" }, { id: 'd', text: "Quand tu as plus de 1 000 fichiers à traiter" }], correctAnswer: 'b', explanation: "La règle des 3 : au-delà de 3 répétitions d'une même action, le temps d'écrire un script (avec Claude) est inférieur au temps de le faire manuellement pour toutes les itérations futures." },
      { id: 'q3', question: "Comment vérifier qu'un script généré par Claude fait bien ce qu'on attend ?", options: [{ id: 'a', text: "Faire confiance à Claude" }, { id: 'b', text: "Lancer le script et comparer le résultat à l'attendu ; si c'est faux, décrire l'écart" }, { id: 'c', text: "Lire entièrement le script avant de le lancer" }, { id: 'd', text: "Demander à un développeur de valider" }], correctAnswer: 'b', explanation: "Lance, vérifie le résultat, et si ça ne correspond pas, décris précisément l'écart à Claude. Il corrige le script. Cette boucle courte est plus efficace que lire le code en détail." },
      { id: 'q4', question: "Quel type de fichier Claude peut-il traiter pour extraire ou transformer des données ?", options: [{ id: 'a', text: "Seulement les fichiers JavaScript" }, { id: 'b', text: "CSV, JSON, images, documents texte" }, { id: 'c', text: "Seulement les fichiers texte brut" }, { id: 'd', text: "Uniquement les fichiers inférieurs à 1 Mo" }], correctAnswer: 'b', explanation: "Claude peut générer des scripts pour traiter CSV, JSON, images (avec Pillow/Sharp), documents Word/PDF. Il génère le code de traitement adapté au format — tu n'as pas à connaître les librairies." },
      { id: 'q5', question: "Qu'est-ce qui fait de Claude Code un outil utile même sans compétences de développeur ?", options: [{ id: 'a', text: "Il a une interface graphique simple" }, { id: 'b', text: "Il traduit des descriptions en langage naturel en scripts fonctionnels" }, { id: 'c', text: "Il ne nécessite pas de terminal" }, { id: 'd', text: "Il remplace complètement le travail manuel" }], correctAnswer: 'b', explanation: "La puissance de Claude Code pour les non-développeurs, c'est la capacité de décrire ce qu'on veut faire (et non pas comment le faire) et d'obtenir un script qui l'exécute." },
    ],
    act: {
      title: "Automatiser une tâche répétitive",
      duration: "15 minutes",
      objective: "Identifier une tâche répétitive dans ton travail et la faire automatiser par Claude Code.",
      steps: [
        { step: 1, instruction: "Pense à une tâche que tu fais régulièrement avec des fichiers : renommer, trier, extraire des informations, convertir un format. Note-la en une phrase." },
        { step: 2, instruction: "Décris la tâche à Claude en langage naturel. Exemple : « Crée un script Python qui renomme tous les fichiers .jpg du dossier courant en ajoutant la date du jour au format YYYY-MM-DD_ devant le nom actuel. »" },
        { step: 3, instruction: "Lance le script généré sur quelques fichiers de test : !python script.py (dans un dossier avec des fichiers de test, pas des originaux)." },
        { step: 4, instruction: "Si le résultat n'est pas exactement ce que tu voulais, décris l'écart à Claude et laisse-le corriger.", tip: "Garde toujours une copie de tes fichiers originaux avant de lancer un script de modification en masse." },
      ],
      validation: "Tu as un script qui automatise une vraie tâche répétitive, testé sur des fichiers de test, et qui fonctionne comme prévu."
    }
  },

  {
    id: 21,
    title: "Les hooks : automatismes silencieux",
    emoji: "⚡",
    duration: "15 minutes",
    section: "Partie 6 — Aller plus loin",
    learn: [
      { type: 'paragraph', text: "Les hooks sont des déclencheurs automatiques dans Claude Code. Ils s'exécutent en réponse à des événements précis — quand Claude arrête de travailler, avant qu'il écrive un fichier, après une commande bash. Tu configures Claude pour qu'il fasse des choses automatiquement, sans que tu aies à le demander à chaque fois." },
      { type: 'heading', text: "Qu'est-ce qu'un hook ?" },
      { type: 'paragraph', text: "Un hook est une commande shell configurée dans settings.json. Quand un événement précis se produit, Claude Code exécute cette commande automatiquement. Les hooks sont gérés par le harness (le moteur de Claude Code), pas par le modèle lui-même." },
      { type: 'heading', text: "Les événements disponibles" },
      { type: 'list', items: [
        "PreToolUse — avant qu'un outil soit utilisé (peut bloquer l'action)",
        "PostToolUse — après qu'un outil est utilisé (pour réagir)",
        "Stop — quand Claude termine sa réponse",
        "Notification — quand Claude génère une notification",
      ]},
      { type: 'code', text: `// Dans ~/.claude/settings.json\n{\n  "hooks": {\n    "Stop": [\n      {\n        "matcher": "",\n        "hooks": [\n          {\n            "type": "command",\n            "command": "osascript -e 'display notification \\"Claude a terminé\\" with title \\"Claude Code\\"'"\n          }\n        ]\n      }\n    ]\n  }\n}` },
      { type: 'heading', text: "Exemples de hooks utiles" },
      { type: 'list', items: [
        "Notification sonore quand Claude a terminé — parfait pour les longues sessions",
        "Lancer les tests automatiquement après chaque modification de fichier",
        "Formatter le code automatiquement après chaque sauvegarde (prettier, eslint --fix)",
        "Logger toutes les commandes bash dans un fichier audit.log",
      ]},
      { type: 'callout', variant: 'note', title: "Pour configurer les hooks", text: "Utilise le skill /update-config pour modifier ton settings.json. Il est conçu pour ça et évite les erreurs de syntaxe JSON." },
    ],
    verify: [
      { id: 'q1', question: "Qui exécute les hooks dans Claude Code ?", options: [{ id: 'a', text: "Le modèle d'IA" }, { id: 'b', text: "Le harness (moteur de Claude Code)" }, { id: 'c', text: "Le terminal de l'utilisateur" }, { id: 'd', text: "Un service externe" }], correctAnswer: 'b', explanation: "Les hooks sont exécutés par le harness — le moteur de Claude Code qui orchestre la boucle agentique. C'est pour ça qu'ils s'exécutent de manière garantie, indépendamment de ce que décide le modèle." },
      { id: 'q2', question: "Dans quel fichier configure-t-on les hooks ?", options: [{ id: 'a', text: "CLAUDE.md" }, { id: 'b', text: "~/.claude/settings.json" }, { id: 'c', text: ".hookrc" }, { id: 'd', text: "Dans le terminal directement" }], correctAnswer: 'b', explanation: "Les hooks se configurent dans settings.json, aux côtés des permissions et du mode par défaut. Un hook mal formaté peut empêcher Claude Code de démarrer — utilise /update-config pour les modifier en sécurité." },
      { id: 'q3', question: "Quel hook se déclenche quand Claude a terminé sa réponse ?", options: [{ id: 'a', text: "PreToolUse" }, { id: 'b', text: "PostToolUse" }, { id: 'c', text: "Stop" }, { id: 'd', text: "Finish" }], correctAnswer: 'c', explanation: "L'événement Stop se déclenche quand Claude termine sa réponse. C'est l'événement idéal pour déclencher une notification ou un résumé de ce qui a été fait." },
      { id: 'q4', question: "Quelle différence entre PreToolUse et PostToolUse ?", options: [{ id: 'a', text: "PreToolUse est plus rapide" }, { id: 'b', text: "PreToolUse s'exécute avant l'action (peut la bloquer), PostToolUse après (pour réagir)" }, { id: 'c', text: "PostToolUse coûte plus de tokens" }, { id: 'd', text: "Aucune différence pratique" }], correctAnswer: 'b', explanation: "PreToolUse s'exécute avant que l'outil agisse — un hook PreToolUse peut retourner un exit code non-zéro pour bloquer l'action. PostToolUse s'exécute après — il ne peut que réagir, pas bloquer." },
      { id: 'q5', question: "Quel outil utiliser pour modifier settings.json en toute sécurité ?", options: [{ id: 'a', text: "Éditer le fichier manuellement dans VS Code" }, { id: 'b', text: "Le skill /update-config" }, { id: 'c', text: "La commande /settings dans Claude Code" }, { id: 'd', text: "Un éditeur JSON en ligne" }], correctAnswer: 'b', explanation: "/update-config est un skill conçu pour modifier settings.json correctement. Il évite les erreurs de syntaxe JSON qui empêcheraient Claude Code de démarrer." },
    ],
    act: {
      title: "Configurer une notification automatique",
      duration: "10 minutes",
      objective: "Ajouter un hook Stop qui envoie une notification quand Claude a terminé.",
      steps: [
        { step: 1, instruction: "Lance Claude Code et tape /update-config. Décris ce que tu veux : « Ajoute un hook qui envoie une notification système quand Claude termine (événement Stop). »" },
        { step: 2, instruction: "Laisse Claude modifier settings.json. Redémarre Claude Code pour appliquer les changements." },
        { step: 3, instruction: "Lance une tâche un peu longue (lire et résumer plusieurs fichiers). Quand Claude termine, tu dois recevoir une notification.", tip: "Sur macOS, la commande osascript permet d'envoyer des notifications natives. Sur Linux, notify-send fonctionne similairement." },
      ],
      validation: "Tu reçois une notification système quand Claude Code termine sa réponse — sans avoir à surveiller le terminal."
    }
  },

  {
    id: 22,
    title: "Les limites et pièges de Claude Code",
    emoji: "🚧",
    duration: "15 minutes",
    section: "Partie 6 — Aller plus loin",
    learn: [
      { type: 'paragraph', text: "Claude Code est puissant, mais il a des limites réelles. Les connaître évite les désillusions et aide à l'utiliser au bon endroit. Voici ce que Claude Code fait mal — et comment compenser." },
      { type: 'heading', text: "Limite 1 — La connaissance a une date limite" },
      { type: 'paragraph', text: "Claude a une date de coupure de connaissance. Pour les librairies qui évoluent vite (React 19, Next.js 15+), il peut donner des exemples d'API obsolètes. Solution : utilise Context7 pour lui fournir la documentation à jour." },
      { type: 'heading', text: "Limite 2 — Les hallucinations techniques" },
      { type: 'paragraph', text: "Claude peut inventer des méthodes qui n'existent pas, des paramètres fictifs, ou des comportements erronés. C'est rare mais ça arrive. Toujours tester le code qu'il écrit — ne pas faire confiance sans vérifier." },
      { type: 'heading', text: "Limite 3 — Les tâches qui nécessitent de l'état" },
      { type: 'paragraph', text: "Claude Code ne peut pas surveiller un serveur en continu, réagir à des événements en temps réel, ou maintenir un état entre les sessions. Il est excellent pour des tâches bornées avec un début et une fin." },
      { type: 'callout', variant: 'warning', title: "Ce que Claude Code n'est pas", text: "Ce n'est pas un agent autonome qui travaille pendant que tu dors. Ce n'est pas un remplaçant d'un développeur pour les décisions architecturales importantes. Ce n'est pas infaillible — un code review humain reste nécessaire avant la production." },
      { type: 'heading', text: "Limite 4 — La taille des projets" },
      { type: 'paragraph', text: "Sur les très grandes codebases (100 000 lignes+), Claude peut perdre le fil des dépendances entre modules. Sa compréhension de l'architecture globale peut être partielle. Dans ces cas, le Plan Mode et des sessions ciblées sur des zones précises du code donnent de meilleurs résultats." },
      { type: 'list', title: "En résumé — Quand être prudent avec Claude Code :", items: [
        "Décisions architecturales critiques sans review humaine",
        "Code qui va en production sans tests ni review",
        "Librairies très récentes sans fournir la documentation via Context7",
        "Tâches qui nécessitent de surveiller un état en continu",
      ]},
    ],
    verify: [
      { id: 'q1', question: "Pourquoi Claude peut-il donner des exemples d'API obsolètes ?", options: [{ id: 'a', text: "Claude invente des APIs pour être plus utile" }, { id: 'b', text: "Sa connaissance a une date limite — les librairies récentes peuvent ne pas être à jour" }, { id: 'c', text: "C'est un bug connu d'Anthropic" }, { id: 'd', text: "Il manque de contexte sur le projet" }], correctAnswer: 'b', explanation: "Claude a été entraîné jusqu'à une certaine date. Les librairies qui ont sorti des versions majeures après cette date peuvent ne pas être correctement connues. Context7 résout ce problème en fournissant la doc officielle à jour." },
      { id: 'q2', question: "Qu'est-ce qu'une hallucination technique de Claude ?", options: [{ id: 'a', text: "Claude qui génère du code créatif" }, { id: 'b', text: "Claude qui invente des méthodes ou des comportements qui n'existent pas" }, { id: 'c', text: "Claude qui répète la même réponse" }, { id: 'd', text: "Claude qui refuse de répondre" }], correctAnswer: 'b', explanation: "Les hallucinations techniques sont des cas où Claude affirme avec confiance quelque chose de faux — une méthode inexistante, un paramètre fictif. C'est rare mais possible. D'où l'importance de toujours tester." },
      { id: 'q3', question: "Claude Code est-il adapté pour surveiller un serveur en continu ?", options: [{ id: 'a', text: "Oui, avec le mode Bypass Permission" }, { id: 'b', text: "Oui, avec un hook de monitoring" }, { id: 'c', text: "Non — il est conçu pour des tâches bornées avec début et fin" }, { id: 'd', text: "Oui, si la fenêtre de contexte est assez grande" }], correctAnswer: 'c', explanation: "Claude Code excelle dans les tâches délimitées (écrire une feature, corriger un bug, rédiger des tests). Il n'est pas conçu pour les tâches continues qui nécessitent de maintenir un état entre les sessions." },
      { id: 'q4', question: "Sur les très grandes codebases, quelle approche donne les meilleurs résultats ?", options: [{ id: 'a', text: "Donner tout le code à Claude d'un coup" }, { id: 'b', text: "Plan Mode + sessions ciblées sur des zones précises" }, { id: 'c', text: "Bypass Permission pour aller plus vite" }, { id: 'd', text: "Utiliser plusieurs instances Claude en parallèle" }], correctAnswer: 'b', explanation: "Sur les grandes codebases, Claude peut perdre le fil des dépendances globales. Cibler des zones précises avec @ et utiliser Plan Mode pour comprendre l'architecture locale donne de meilleurs résultats." },
      { id: 'q5', question: "Un code review humain est-il toujours nécessaire avant la production ?", options: [{ id: 'a', text: "Non — Claude est suffisamment fiable pour la production" }, { id: 'b', text: "Seulement pour le code de sécurité" }, { id: 'c', text: "Oui — Claude n'est pas infaillible et un regard humain reste nécessaire" }, { id: 'd', text: "Uniquement si la codebase est grande" }], correctAnswer: 'c', explanation: "Claude est un collaborateur très capable, pas un remplaçant du jugement humain. Le code review humain avant production reste nécessaire pour les décisions architecturales, la sécurité, et la cohérence métier." },
    ],
    act: {
      title: "Tester les limites de Claude",
      duration: "10 minutes",
      objective: "Provoquer intentionnellement une erreur pour reconnaître les signaux d'alerte.",
      steps: [
        { step: 1, instruction: "Demande à Claude d'utiliser une méthode fictive dans une librairie réelle : « Utilise la méthode .transformAsync() de Lodash pour filtrer ce tableau. » (Cette méthode n'existe pas.) Observe s'il invente une réponse ou admet ne pas connaître." },
        { step: 2, instruction: "Lance le code généré avec !node script.js. Si Claude a halluciné, tu verras une erreur 'is not a function'." },
        { step: 3, instruction: "Demande à Claude de corriger l'erreur en utilisant une vraie méthode Lodash. Observe qu'il se corrige maintenant qu'il voit l'erreur réelle." },
      ],
      validation: "Tu as détecté une hallucination possible par l'exécution, et vu Claude se corriger avec le feedback de l'erreur réelle."
    }
  },

  {
    id: 23,
    title: "Construire son setup idéal",
    emoji: "🎯",
    duration: "20 minutes",
    section: "Partie 6 — Aller plus loin",
    learn: [
      { type: 'paragraph', text: "Après 24 chapitres, tu as toutes les briques pour construire ton setup Claude Code. Ce dernier chapitre synthétise tout — non pas comme une liste de règles, mais comme une philosophie d'usage." },
      { type: 'heading', text: "La pile minimale recommandée" },
      { type: 'list', items: [
        "settings.json avec bypassPermissions + deny list (rm -rf, sudo)",
        "CLAUDE.md global (~/.claude/CLAUDE.md) avec tes préférences personnelles",
        "CLAUDE.md projet généré par /init, allégé du superflu",
        "Context7 comme seul MCP — documentation à jour à la demande",
        "Un agent web-search avec Haiku pour les recherches légères",
        "Un hook Stop pour la notification de fin",
      ]},
      { type: 'heading', text: "Les 5 habitudes qui changent tout" },
      { type: 'list', items: [
        "Commit avant chaque grosse session Claude — le filet de sécurité",
        "/clear entre chaque tâche distincte — le contexte propre",
        "Plan Mode pour chaque feature non triviale — l'architecture avant le code",
        "@fichier plutôt qu'exploration libre — le contexte ciblé",
        "Tester après chaque étape — pas à la fin quand tout est cassé",
      ]},
      { type: 'heading', text: "La progression naturelle" },
      { type: 'comparison', left: { title: "Semaines 1-2", text: "Mode Standard. Observe chaque action. Lis les diffs. Construis ta confiance en Claude." }, right: { title: "Semaines 3+", text: "Accept Edits pour le code quotidien. Bypass avec deny list pour les sessions intenses. Plan Mode avant les grosses features." } },
      { type: 'callout', variant: 'key', title: "L'objectif final", text: "Claude Code n'est pas un outil pour écrire du code à ta place. C'est un multiplicateur de ta capacité à construire. Plus tu le maîtrises, plus la distance entre ton idée et sa réalisation se réduit." },
      { type: 'highlight', text: "Ce que tu peux faire en 1 semaine avec Claude Code, ça prend 3 mois sans. La compétence n'est pas de savoir coder — c'est de savoir collaborer avec l'IA." },
    ],
    verify: [
      { id: 'q1', question: "Selon la pile minimale recommandée, combien de MCP faut-il installer ?", options: [{ id: 'a', text: "Le plus possible — chaque MCP ajoute des capacités" }, { id: 'b', text: "1 à 2 maximum — Context7 est le principal recommandé" }, { id: 'c', text: "Aucun MCP n'est nécessaire" }, { id: 'd', text: "5 MCP est un bon nombre" }], correctAnswer: 'b', explanation: "Chaque MCP occupe du contexte. La pile minimale recommande Context7 comme seul MCP obligatoire — il couvre le besoin principal (documentation à jour) sans surcharger le contexte." },
      { id: 'q2', question: "Quelle est la progression naturelle recommandée pour passer du mode Standard au Bypass ?", options: [{ id: 'a', text: "Passer directement en Bypass dès l'installation" }, { id: 'b', text: "Semaines 1-2 en Standard pour observer, puis Accept Edits et Bypass progressivement" }, { id: 'c', text: "Toujours rester en Standard pour la sécurité" }, { id: 'd', text: "Bypass uniquement pour les développeurs senior" }], correctAnswer: 'b', explanation: "Commencer en Standard permet de voir exactement ce que Claude fait et de construire sa confiance. Passer au Bypass trop vite sans compréhension peut mener à des surprises désagréables." },
      { id: 'q3', question: "Parmi les 5 habitudes clés, laquelle est le 'filet de sécurité' ?", options: [{ id: 'a', text: "/clear entre les tâches" }, { id: 'b', text: "Plan Mode avant les features" }, { id: 'c', text: "Commit avant chaque grosse session Claude" }, { id: 'd', text: "Tester après chaque étape" }], correctAnswer: 'c', explanation: "Le commit avant une session Claude est le filet de sécurité absolu. Si Claude fait des modifications non souhaitées, un git reset ramène exactement à l'état d'avant. Sans commit récent, il n'y a pas de retour en arrière." },
      { id: 'q4', question: "Quelle est la vraie valeur de Claude Code selon ce cours ?", options: [{ id: 'a', text: "Écrire du code à la place du développeur" }, { id: 'b', text: "Remplacer les ingénieurs seniors" }, { id: 'c', text: "Multiplier ta capacité à construire — réduire la distance entre idée et réalité" }, { id: 'd', text: "Automatiser les tests uniquement" }], correctAnswer: 'c', explanation: "Claude Code est un multiplicateur. Il n'écrit pas à ta place — il amplifie ce que tu peux accomplir. La compétence clé est de savoir collaborer avec l'IA, pas de savoir coder seul." },
      { id: 'q5', question: "Quel signe indique qu'on utilise bien Claude Code ?", options: [{ id: 'a', text: "Claude fait tout sans qu'on ait à corriger" }, { id: 'b', text: "La distance entre l'idée et sa réalisation se réduit — on construit plus vite avec le même niveau de qualité" }, { id: 'c', text: "On n'a plus besoin de relire le code" }, { id: 'd', text: "La consommation de tokens est minimale" }], correctAnswer: 'b', explanation: "Le vrai signe de maîtrise, c'est la vélocité. Pas plus de code écrit automatiquement, mais des idées qui deviennent réalité plus vite, avec moins de friction entre la conception et l'implémentation." },
    ],
    act: {
      title: "Construire son setup complet",
      duration: "20 minutes",
      objective: "Mettre en place la pile minimale recommandée et commencer à l'utiliser.",
      steps: [
        { step: 1, instruction: "Vérifie que tu as les 6 éléments de la pile minimale : settings.json (bypassPermissions + deny list), CLAUDE.md global, CLAUDE.md projet, Context7, agent web-search, hook Stop. Note ceux qui manquent." },
        { step: 2, instruction: "Pour chaque élément manquant, ouvre une session Claude et mets-le en place. Utilise les chapitres précédents comme référence.", tip: "Ne tout faire d'un coup. Une session par élément — /clear entre chaque." },
        { step: 3, instruction: "Lance Claude Code sur un vrai projet avec ton nouveau setup. Essaie de construire une feature complète en appliquant les 5 habitudes : commit de sécurité, Plan Mode, sessions ciblées, tests en continu." },
        { step: 4, instruction: "Après la session, note ce qui a bien fonctionné et ce qui peut encore être amélioré dans ton setup. Ton setup va évoluer avec ton usage — c'est normal." },
      ],
      validation: "Ton setup est complet (ou tu sais exactement ce qui manque et pourquoi). Tu as utilisé Claude Code sur une vraie tâche avec les bonnes habitudes. Tu es prêt à continuer à améliorer ton workflow au fil du temps."
    }
  },

]

