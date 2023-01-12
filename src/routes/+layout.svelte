<script lang="ts">
  import '../app.postcss';
  import { QueryClientProvider, QueryClient } from '@tanstack/svelte-query';
  import Navbar from '$lib/Navbar.svelte';
  import type { LayoutServerData } from './$types';
  const queryClient = new QueryClient();

  export let data: LayoutServerData;
</script>

<QueryClientProvider client={queryClient}>
  {#if data.user}
    <Navbar />
  {/if}
  <main class="container mx-auto px-16">
    <slot />
  </main>
</QueryClientProvider>
