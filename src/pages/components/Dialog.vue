<template>
<page-content-back page-title="Dialog">
  <div class="main-content">
    <p>Dialogs inform users about a specific task and may contain critical information, require decisions, or involve multiple tasks.

      <br><br>The dialog component works with any plain html content. You can have tabs, all form components and more.

      <br><br>Alternativelly you can use three presets to build Alerts, Confirms and Prompt dialogs.</p>
    <block-content block-title="Custom">
      <div class="block-content">
        <md-dialog md-open-from="#custom" md-close-to="#custom" ref="dialog1">
          <md-dialog-title>Lorem ipsum dolor sit amet</md-dialog-title>

          <md-dialog-content>Nemo, nobis necessitatibus ut illo, ducimus ex.</md-dialog-content>

          <md-dialog-actions>
            <md-button class="md-primary" @click.native="closeDialog('dialog1')">Cancel</md-button>
            <md-button class="md-primary" @click.native="closeDialog('dialog1')">Ok</md-button>
          </md-dialog-actions>
        </md-dialog>

        <md-dialog md-open-from="#fab" md-close-to="#fab" ref="dialog2">
          <md-dialog-title>Create new note</md-dialog-title>

          <md-dialog-content>
            <form>
              <md-input-container>
                <label>Note</label>
                <md-textarea></md-textarea>
              </md-input-container>
            </form>
          </md-dialog-content>

          <md-dialog-actions>
            <md-button class="md-primary" @click.native="closeDialog('dialog2')">Cancel</md-button>
            <md-button class="md-primary" @click.native="closeDialog('dialog2')">Create</md-button>
          </md-dialog-actions>
        </md-dialog>

        <md-button class="md-primary md-raised" id="custom" @click.native="openDialog('dialog1')">Custom</md-button>
        <md-button class="md-fab" id="fab" @click.native="openDialog('dialog2')">
          <md-icon>add</md-icon>
        </md-button>
      </div>
    </block-content>

    <block-content block-title="Alerts">
      <div class="block-content">
        <md-dialog-alert :md-content="alert.content" :md-ok-text="alert.ok" @open="onOpen" @close="onClose" ref="dialog3">
        </md-dialog-alert>

        <md-dialog-alert :md-title="alert2.title" :md-content-html="alert2.contentHtml" @open="onOpen" @close="onClose" ref="dialog4">
        </md-dialog-alert>

        <md-button class="md-primary md-raised" @click.native="openDialog('dialog3')">Alert</md-button>
        <md-button class="md-primary md-raised" @click.native="openDialog('dialog4')">Alert with HTML</md-button>
      </div>
    </block-content>

    <block-content block-title="Confirm">
      <div class="block-content">
        <md-dialog-confirm :md-title="confirm.title" :md-content-html="confirm.contentHtml" :md-ok-text="confirm.ok" :md-cancel-text="confirm.cancel" @open="onOpen" @close="onClose" ref="dialog5">
        </md-dialog-confirm>

        <md-button class="md-primary md-raised" @click.native="openDialog('dialog5')">Confirm</md-button>
      </div>
    </block-content>

    <block-content block-title="Prompt">
      <div class="block-content">
        <md-dialog-prompt :md-title="prompt.title" :md-ok-text="prompt.ok" :md-cancel-text="prompt.cancel" :md-input-maxlength="prompt.maxlength" :md-input-placeholder="prompt.placeholder" @open="onOpen" @close="onClose" ref="dialog6">
        </md-dialog-prompt>

        <md-button class="md-primary md-raised" @click.native="openDialog('dialog6')">Prompt</md-button>
      </div>
    </block-content>
  </div>
</page-content-back>
</template>

<script>
export default {
  data () {
    return {
      alert: {
        content: 'Your post has been deleted!',
        ok: 'Cool!'
      },
      alert2: {
        title: 'Post created!',
        contentHtml: 'Your post <strong>Material Design is awesome</strong> has been created.'
      },
      confirm: {
        title: 'Use Google\'s location service?',
        contentHtml: 'Let Google help apps determine location. <br> This means sending <strong>anonymous</strong> location data to Google, even when no apps are running.',
        ok: 'Agree',
        cancel: 'Disagree'
      },
      prompt: {
        title: 'What\'s your name?',
        ok: 'Done',
        cancel: 'Cancel',
        id: 'name',
        name: 'name',
        placeholder: 'Type your name...',
        maxlength: 30,
        value: ''
      }
    }
  },

  methods: {
    openDialog (ref) {
      this.$refs[ref].open()
    },
    closeDialog (ref) {
      this.$refs[ref].close()
    },
    onOpen () {
      console.log('Opened')
    },
    onClose (type) {
      console.log('Closed', type)
    }
  }
}
</script>

<style lang="css">
</style>
