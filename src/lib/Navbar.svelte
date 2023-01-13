<script lang="ts">
  import { enhance } from '$app/forms';
</script>

<div class="navbar bg-base-100">
  <div class="flex-1">
    <a class="btn btn-ghost normal-case text-xl" href="/">daisyUI</a>
  </div>
  <div class="flex-none gap-2">
    <div class="form-control">
      <input type="text" placeholder="Search" class="input input-bordered" />
    </div>
    <div class="dropdown dropdown-end">
      <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
      <!-- svelte-ignore a11y-label-has-associated-control -->
      <label tabindex="0" class="btn btn-ghost btn-circle avatar">
        <!-- svelte-ignore a11y-missing-attribute -->
        <div class="w-10 rounded-full">
          <!-- svelte-ignore a11y-missing-attribute -->
          <img src="https://placeimg.com/80/80/people" />
        </div>
      </label>
      <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
      <ul
        tabindex="0"
        class="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-200 rounded-box w-52 "
      >
        <li>
          <!-- svelte-ignore a11y-missing-attribute -->
          <a class="justify-between">
            Profile
            <span class="badge">New</span>
          </a>
        </li>
        <!-- svelte-ignore a11y-missing-attribute -->
        <li><a>Settings</a></li>
        <form action="/logout" method="POST">
          <li><button type="submit">Logout</button></li>
        </form>
      </ul>
    </div>
  </div>
</div>
