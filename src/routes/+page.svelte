<script lang="ts">
  import type { PageServerData } from './$types';

  export let data: PageServerData;

  console.log(data);
</script>

<h1>Hello world</h1>
<a href="/login" class="link">LoginPage</a>
