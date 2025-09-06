export default defineAppConfig({
  ui: {
    colors: {
      primary: 'amber',
      neutral: 'zinc',
    },
    input: {
      slots: {
        root: 'w-full'
      },
    },
    select: {
      slots: {
        base: 'w-full'
      }
    },
    selectMenu: {
      slots: {
        base: 'w-full'
      }
    },
    textarea: {
      slots: {
        root: 'w-full'
      }
    },
    checkboxGroup: {
      variants: {
        size: {
          xs: {
            item: 'first-of-type:rounded-s-md! last-of-type:rounded-e-md!'
          }
        }
      }
    },
    toast: {
      defaultVariants: {
        color: 'neutral'
      }
    }
  }
})
