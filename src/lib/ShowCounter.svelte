<script>
  import { createCounter } from '../hooks/useCounter';

  const counter = createCounter();

  console.log($counter);
</script>

<h1>
  {$counter}
</h1>
