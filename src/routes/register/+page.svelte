<script lang="ts">
  import { enhance } from '$app/forms';
</script>

<form
  action="?/register"
  class="form-control gap-2 bg-base-200 rounded p-4"
  use:enhance
  method="POST"
>
  <label for="" class="label">Username</label>
  <input type="text" name="username" class="input bg-base-300" />

  <label for="" class="label">Password</label>
  <input type="text" name="password" class="input bg-base-300" />

  <label for="" class="label">Confirm Password</label>
  <input type="text" name="confirmPassword" class="input bg-base-300" />

  <button class="btn btn-primary" type="submit">Register</button>
</form>
