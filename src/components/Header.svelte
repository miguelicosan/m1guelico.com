<script>
  import Icon from '@iconify/svelte';
  import menuIcon from '@iconify/icons-mdi/menu';
  import closeIcon from '@iconify/icons-mdi/close';

  let isMenuOpen = false;

  const toggleMenu = () => {
    isMenuOpen = !isMenuOpen;
  };
</script>

<header class="bg-primary text-white py-4">
  <div class="container mx-auto flex justify-between items-center px-4">
    <div class="text-lg font-bold flex items-center space-x-2">
      <img src="./img/logo-m1guelico-com.png" alt="m1guelico.com | full-stack developer">
    </div>
    <nav class="hidden md:flex space-x-4 ml-auto">
      <a href="#presentacion" class="text-lg hover:text-secondary">Sobre mí</a>
      <a href="#aptitudes" class="text-lg hover:text-secondary">Aptitudes</a>
      <a href="#proyectos" class="text-lg hover:text-secondary">Proyectos</a>
      <a href="#contacto" class="text-lg hover:text-secondary">Contacto</a>
      <a href="#blog" class="text-lg hover:text-secondary">Blog</a>
    </nav>
    <button class="md:hidden focus:outline-none ml-auto" on:click={toggleMenu}>
      {#if isMenuOpen}
        <Icon icon={closeIcon} class="w-8 h-8 transition-transform transform duration-300 ease-in-out" />
      {:else}
        <Icon icon={menuIcon} class="w-8 h-8 transition-transform transform duration-300 ease-in-out" />
      {/if}
    </button>
  </div>
  <nav class={`md:hidden bg-primary py-4 px-4 space-y-2 overflow-hidden transition-max-height duration-300 ease-in-out ${isMenuOpen ? 'max-h-64' : 'max-h-0'}`}>
    <a href="#presentacion" class="block text-lg hover:text-secondary">Sobre mí</a>
    <a href="#aptitudes" class="block text-lg hover:text-secondary">Aptitudes</a>
    <a href="#proyectos" class="block text-lg hover:text-secondary">Proyectos</a>
    <a href="#contacto" class="block text-lg hover:text-secondary">Contacto</a>
    <a href="#blog" class="block text-lg hover:text-secondary">Blog</a>
  </nav>
</header>

<style>
  header {
    background-color: #1f2937; /* Gris oscuro */
  }
  .hover\:text-secondary:hover {
    color: #3b82f6; /* Azul */
  }
  .transition-max-height {
    transition: max-height 0.3s ease-in-out;
  }
  .max-h-0 {
    max-height: 0;
  }
  .max-h-64 {
    max-height: 103px;
  }
</style>
