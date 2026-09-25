<?php $base = ($activePage ?? 'home') === 'home' ? '' : 'index.php'; ?>
<footer class="site-footer">
    <div class="container">
        <div class="footer-grid">
            <div class="footer-brand">
                <img src="img/logo.png" alt="VBC Limited" width="100" height="35">
                <p>IT staffing, software engineering and quality assurance — delivered by a dedicated team of professionals across the UK and India.</p>
            </div>
            <div>
                <h4>Company</h4>
                <a href="<?= $base ?>#about">About us</a>
                <a href="<?= $base ?>#services">Services</a>
                <a href="<?= $base ?>#automation">Test Automation</a>
                <a href="career.php">Careers</a>
            </div>
            <div>
                <h4>Services</h4>
                <a href="<?= $base ?>#services">Recruitment</a>
                <a href="<?= $base ?>#services">Software Development</a>
                <a href="<?= $base ?>#services">Mobile Apps</a>
                <a href="<?= $base ?>#services">Quality Assurance</a>
            </div>
            <div>
                <h4>Get in touch</h4>
                <a href="mailto:<?= e(VBC_EMAIL) ?>"><?= e(VBC_EMAIL) ?></a>
                <a href="tel:<?= e(str_replace(' ', '', VBC_PHONE)) ?>"><?= e(VBC_PHONE) ?></a>
                <span><?= e(VBC_ADDRESS) ?></span>
            </div>
        </div>
        <div class="footer-bottom">
            <span>&copy; 2017&ndash;<?= date('Y') ?> VBC Limited. All rights reserved.</span>
            <a href="#top" class="to-top">Back to top <svg class="icon"><use href="#i-arrow-up"/></svg></a>
        </div>
    </div>
</footer>
<script src="js/main.js" defer></script>
</body>
</html>
