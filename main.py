def solution(mat):
    rows = len(mat)
    cols = len(mat[0])

    row_sum = [0] * rows
    col_sum = [0] * cols

    for i in range(rows):
        for j in range(cols):
            row_sum[i] += mat[i][j]
            col_sum[j] += mat[i][j]

    count = 0

    for i in range(rows):
        for j in range(cols):
            if mat[i][j] == 1 and row_sum[i] == 0 and col_sum[j] == 0:
                count += 1

    return count


mat = [[1, 0, 0], [0, 0, 1], [1, 0, 0]]
print(solution(mat))
