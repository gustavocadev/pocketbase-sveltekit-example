<script lang="ts">
  import { enhance } from '$app/forms';
</script>

<form
  action="?/login"
  class="form-control gap-2 bg-base-200 p-4 rounded"
  use:enhance
  method="POST"
>
  <label for="" class="label">Username</label>
  <input type="text" name="username" class="input bg-base-300" />

  <label for="" class="label">Password</label>
  <input type="text" name="password" class="input bg-base-300" />

  <button class="btn btn-primary" type="submit">Login</button>
  <a href="/register" class="link">No tienes una cuenta? Registrate</a>
</form>
