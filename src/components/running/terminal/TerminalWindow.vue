<template>
  <div style="height: 100%; width: 100%;">
    <Terminal
      :welcomeMessage="`myOs ${$store.state.version}`"
      :prompt="prompt"
      aria-label="Terminal"
      class="terminal"
      :pt="{
        root: 'bg-gray-900 text-white',
        prompt: 'text-gray-400 mr-2',
        command: 'text-primary-300',
        response: 'text-primary-300',
      }"
    />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import Terminal from "primevue/terminal";
import TerminalService from "primevue/terminalservice";
import "primevue/resources/themes/lara-light-green/theme.css";

export default {
  components: {
    Terminal,
  },
  data() {
    return {
      paths: [{
        name: 'home',
        id: -1,
      }],
    };
  },
  mounted() {
    TerminalService.on("command", this.commandHandler);
  },
  beforeUnmount() {
    TerminalService.off("command", this.commandHandler);
  },
  methods: {
    commandHandler(text) {
      let response = '';
      let argsIndex = text.indexOf(" ");
      let command = argsIndex !== -1 ? text.substring(0, argsIndex) : text;

      switch (command) {
        case "help":
          response = "commands: ls, cd {0}, open {0}";
          break;
        case "ls":
          for (let i = 0; i < this.getCurrentFolder.length; i += 1) {
            response += `${this.getCurrentFolder[i].name} (${this.getCurrentFolder[i].type}), `;
          }
          break;
        case "cd":
          // eslint-disable-next-line
          const param = text.substring(argsIndex + 1).toLowerCase();
          if (param === '..') {
            this.paths.pop();
            break;
          }
          // eslint-disable-next-line
          const folder = this.getCurrentFolder.find(f => f.name.toLowerCase() === param);
          if (folder) {
            this.paths.push({ name: folder.name, id: folder.id, content: folder.content });
          } else {
            response = "No such folder";
          }
          // TODO vastaa ls?
          break;
        case "open":
          // eslint-disable-next-line
          const item = this.getCurrentFolder.find(f => f.name.toLowerCase() === text.substring(argsIndex + 1).toLowerCase());
          if (item) {
            this.$store.dispatch('openApplication', {
              name: item.name,
              type: item.type,
              fileSystemId: item.id,
            });
          } else {
            response = "No such file or program"
          }
          break;
        default:
          response = "Unknown command: " + command + ", try help";
      }

      if (response != '') {
        TerminalService.emit("response", response);
      }
    },
  },
  computed: {
    ...mapGetters({  
      getFileSystemItems: 'getFileSystemItems',
    }),
    getCurrentFolder() {
      const items = this.getFileSystemItems;
      if (this.isHome) {
        return items;
      }
      const lastItem = this.paths[this.paths.length - 1];
      return lastItem.content;
    },
    isHome() {
      return this.paths.length === 1;
    },
    prompt() {
      const paths = this.paths.map(p => p.name);
      return `$ ${paths.join('/')}:~ `;
    },
  },
};
</script>

<style scoped>
.terminal {
  border: none;
  background-color: black;
  color: #d2d2d2;
  height: 100%;
  width: 100%;
}

::v-deep(.p-terminal-prompt) {
  color: #9e9ede;
}

::v-deep(.p-terminal-response) {
  color: #717199;
}
</style>
