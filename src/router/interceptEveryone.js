let intercept
export function bindInterceptEveryone () {
    destroyInterceptEveryone()
}
export function destroyInterceptEveryone () {
    if (intercept) {
        intercept() // 销毁拦截
        intercept = null
    }
}

