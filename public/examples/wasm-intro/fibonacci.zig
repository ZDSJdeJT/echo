export fn fibonacci(n: u32) u32 {
    return if (n <= 1) n else fibonacci(n - 1) + fibonacci(n - 2);
}
