<?php
$activePage = $activePage ?? 'home';
$base = $activePage === 'home' ? '' : 'index.php';
?>
<a class="skip-link" href="#main">Skip to content</a>
<header class="site-nav" data-nav>
    <div class="container nav-inner">
        <a href="index.php" class="brand" aria-label="VBC Limited home">
            <img src="img/logo.png" alt="VBC Limited" width="100" height="35">
        </a>

        <nav class="nav-links" id="nav-menu" aria-label="Primary">
            <a href="<?= $base ?>#top" data-nav-link>Home</a>
            <a href="<?= $base ?>#about" data-nav-link>About</a>
            <a href="<?= $base ?>#services" data-nav-link>Services</a>
            <a href="<?= $base ?>#automation" data-nav-link>Automation</a>
            <a href="<?= $base ?>#contact" data-nav-link>Contact</a>
            <a href="career.php" class="<?= $activePage === 'career' ? 'is-active' : '' ?>">Careers</a>
        </nav>

        <a href="<?= $base ?>#contact" class="btn btn-sm btn-primary nav-cta">
            Let's talk <svg class="icon"><use href="#i-arrow"/></svg>
        </a>

        <button class="nav-toggle" type="button" aria-controls="nav-menu" aria-expanded="false" aria-label="Toggle menu" data-nav-toggle>
            <span></span><span></span>
        </button>
    </div>
</header>
